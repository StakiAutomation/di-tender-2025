terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=4.1.0"
    }
  }
}

module "resource_group" {
  source = "./modules/resource_groups"

  project_name = var.project_name
  environment  = var.environment
  location     = var.location
}

module "networking" {
  source = "./modules/networking"

  project_name        = var.project_name
  environment         = var.environment
  location            = var.location
  resource_group_name = module.resource_group.resource_group_name
  address_space       = var.vnet_address_space

  depends_on = [module.resource_group]
}

module "keyvault" {
  source = "./modules/keyvault"

  project_name               = var.project_name
  environment                = var.environment
  location                   = var.location
  resource_group_name        = module.resource_group.resource_group_name
  virtual_network_id         = module.networking.vnet_main_id
  private_endpoint_subnet_id = module.networking.private_endpoint_subnet_id
  allowed_subnet_ids         = [module.networking.app_services_subnet_id]
  allowed_ip_ranges          = var.allowed_ip_ranges_for_key_vault

  depends_on = [module.resource_group]
}

module "data" {
  source = "./modules/data"

  project_name        = var.project_name
  environment         = var.environment
  location            = var.location
  resource_group_name = module.resource_group.resource_group_name
  virtual_network_id  = module.networking.vnet_main_id
  database_subnet_id  = module.networking.databases_subnet_id
  key_vault_id        = module.keyvault.keyvault_id
  databases           = var.databases
  db_user             = var.db_user
  db_password         = var.db_password

  depends_on = [module.resource_group, module.networking, module.keyvault]
}

module "app_services" {
  source = "./modules/app_services"

  project_name               = var.project_name
  location                   = var.location
  resource_group_name        = module.resource_group.resource_group_name
  virtual_network_id         = module.networking.vnet_main_id
  app_service_subnet_id      = module.networking.app_services_subnet_id
  private_endpoint_subnet_id = module.networking.private_endpoint_subnet_id
  key_vault_id               = module.keyvault.keyvault_id

  depends_on = [module.resource_group, module.networking, module.keyvault, module.data]
}
