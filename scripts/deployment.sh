#!/bin/bash
RESOURCE_GROUP="di-tender-dev-rg-eu"

RSK_APP_NAME="di-tender-rsk-api-eu"
RSK_PATH="../external/rsk-api"

NATIONAL_REGISTRY_APP_NAME="di-tender-national-registry-api-eu"
NATIONAL_REGISTRY_PATH="../external/thjodskra-api"

cd $RSK_PATH
npm run build
zip -r deploy.zip dist/* package.json package-lock.json node_modules/*

az webapp config set \
  --resource-group di-tender-dev-rg-eu \
  --name $RSK_APP_NAME \
  --startup-file "npm run start:prod"

az webapp deploy \
  --resource-group $RESOURCE_GROUP \
  --name $RSK_APP_NAME \
  --src-path deploy.zip \
  --type zip \
  --async false

cd $NATIONAL_REGISTRY_PATH
npm run build
zip -r deploy.zip dist/* package.json package-lock.json node_modules/*

az webapp config set \
  --resource-group di-tender-dev-rg-eu \
  --name $NATIONAL_REGISTRY_APP_NAME \
  --startup-file "npm run start:prod"

az webapp deploy \
  --resource-group $RESOURCE_GROUP \
  --name $NATIONAL_REGISTRY_APP_NAME \
  --src-path deploy.zip \
  --type zip \
  --async false

