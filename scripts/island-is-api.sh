#!/bin/bash
RESOURCE_GROUP="di-tender-dev-rg-eu"

ISLAND_IS_API_APP_NAME="di-tender-island-is-api-eu"
PROJECT_ROOT="../web"
DIST_FOLDER="../web/dist/apps/rsk/ws"

cd $PROJECT_ROOT
yarn nx run ws:build
cp package.json $DIST_FOLDER
cd $DIST_FOLDER
npm install -f
zip -r deploy.zip .

az webapp config set \
  --resource-group $RESOURCE_GROUP \
  --name $ISLAND_IS_API_APP_NAME \
  --startup-file "node main.js"

az webapp deploy \
  --resource-group $RESOURCE_GROUP \
  --name $ISLAND_IS_API_APP_NAME \
  --src-path deploy.zip \
  --type zip \
  --async false \
  --timeout 1800
