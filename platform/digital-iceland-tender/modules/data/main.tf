module "common" {
  source = "../common"

  location = var.location
}

locals {
  storage_mb         = 32768
  postgresql_version = "16"
  charset            = "UTF8"
  collation          = "en_US.utf8"
}

resource "azurerm_postgresql_flexible_server" "dbserver" {
  name                = "${var.project_name}-${var.environment}-psql-${module.common.location_shortened}"
  resource_group_name = var.resource_group_name
  location            = var.location
  version             = local.postgresql_version

  sku_name   = "B_Standard_B1ms"
  storage_mb = local.storage_mb

  administrator_login    = var.db_user
  administrator_password = var.db_password

  backup_retention_days = 7
  zone                  = "1"
}

resource "azurerm_postgresql_flexible_server_database" "databases" {
  for_each = { for db in var.databases : db => db }

  name      = "di-tender-db-${each.value}"
  server_id = azurerm_postgresql_flexible_server.dbserver.id
  charset   = local.charset
  collation = local.collation
}

resource "azurerm_key_vault_secret" "postgres_connection_strings" {
  for_each = azurerm_postgresql_flexible_server_database.databases

  name         = "${each.value.name}-connection-string"
  value        = "postgresql://${azurerm_postgresql_flexible_server.dbserver.administrator_login}:${azurerm_postgresql_flexible_server.dbserver.administrator_password}@${azurerm_postgresql_flexible_server.dbserver.fqdn}:5432/${each.value.name}"
  key_vault_id = var.key_vault_id
}

resource "azurerm_postgresql_flexible_server_firewall_rule" "azure_services" {
  name             = "Azure-Services"
  server_id        = azurerm_postgresql_flexible_server.dbserver.id
  start_ip_address = "0.0.0.0"
  end_ip_address   = "0.0.0.0"
}
