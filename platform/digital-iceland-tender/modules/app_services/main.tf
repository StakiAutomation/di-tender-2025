module "common" {
  source = "../common"

  location = var.location
}

locals {
  node_version = "20-lts"
}

resource "azurerm_service_plan" "main" {
  name                = "${var.project_name}-plan-${module.common.location_shortened}"
  resource_group_name = var.resource_group_name
  location            = var.location
  os_type             = var.app_service_plan_os_type
  sku_name            = var.app_service_plan_sku
}

# Private DNS zone setup
resource "azurerm_private_dns_zone" "app_service" {
  name                = "privatelink.azurewebsites.net"
  resource_group_name = var.resource_group_name
}

resource "azurerm_private_dns_zone_virtual_network_link" "app_service" {
  name                  = "${var.project_name}-dns-link"
  resource_group_name   = var.resource_group_name
  private_dns_zone_name = azurerm_private_dns_zone.app_service.name
  virtual_network_id    = var.virtual_network_id
  registration_enabled  = false
}

# Island.is API
data "azurerm_key_vault_secret" "islandis_db_connection_string" {
  name         = "di-tender-db-island-is-connection-string"
  key_vault_id = var.key_vault_id
}

resource "azurerm_linux_web_app" "islandis_api" {
  name                      = "${var.project_name}-island-is-api-${module.common.location_shortened}"
  resource_group_name       = var.resource_group_name
  location                  = var.location
  service_plan_id           = azurerm_service_plan.main.id
  virtual_network_subnet_id = var.app_service_subnet_id

  site_config {
    application_stack {
      node_version = local.node_version
    }

    always_on              = true
    vnet_route_all_enabled = true
  }

  app_settings = {
    "DATABASE_URL" = "@Microsoft.KeyVault(SecretUri=${data.azurerm_key_vault_secret.islandis_db_connection_string.versionless_id})"
  }

  # Disable public access
  public_network_access_enabled = false

  identity {
    type = module.common.identity_type.system_assigned
  }
}

resource "azurerm_private_endpoint" "islandis_api" {
  name                = "${var.project_name}-islandis-api-pe-${module.common.location_shortened}"
  location            = var.location
  resource_group_name = var.resource_group_name
  subnet_id           = var.private_endpoint_subnet_id

  private_service_connection {
    name                           = "${var.project_name}-islandis-api-psc"
    private_connection_resource_id = azurerm_linux_web_app.islandis_api.id
    is_manual_connection           = false
    subresource_names              = ["sites"]
  }

  private_dns_zone_group {
    name                 = "default"
    private_dns_zone_ids = [azurerm_private_dns_zone.app_service.id]
  }
}

resource "azurerm_private_dns_a_record" "islandis_api" {
  name                = azurerm_linux_web_app.islandis_api.name
  zone_name           = azurerm_private_dns_zone.app_service.name
  resource_group_name = var.resource_group_name
  ttl                 = 300
  records             = [azurerm_private_endpoint.islandis_api.private_service_connection[0].private_ip_address]
}

resource "azurerm_private_dns_a_record" "islandis_api_scm" {
  name                = "${azurerm_linux_web_app.islandis_api.name}.scm"
  zone_name           = azurerm_private_dns_zone.app_service.name
  resource_group_name = var.resource_group_name
  ttl                 = 300
  records             = [azurerm_private_endpoint.islandis_api.private_service_connection[0].private_ip_address]
}

resource "azurerm_role_assignment" "islandis_api_key_vault" {
  scope                = var.key_vault_id
  role_definition_name = "Key Vault Secrets User"
  principal_id         = azurerm_linux_web_app.islandis_api.identity[0].principal_id
}

# Island.is Web
resource "azurerm_linux_web_app" "islandis_web" {
  name                      = "${var.project_name}-islandis-web-${module.common.location_shortened}"
  resource_group_name       = var.resource_group_name
  location                  = var.location
  service_plan_id           = azurerm_service_plan.main.id
  virtual_network_subnet_id = var.app_service_subnet_id

  site_config {
    application_stack {
      node_version = local.node_version
    }

    always_on              = true
    vnet_route_all_enabled = true
  }

  app_settings = {
    "API_BASE_URL" = "https://${azurerm_linux_web_app.islandis_api.name}.azurewebsites.net"
  }

  identity {
    type = module.common.identity_type.system_assigned
  }
}

# RSK API
data "azurerm_key_vault_secret" "rsk_db_connection_string" {
  name         = "di-tender-db-rsk-connection-string"
  key_vault_id = var.key_vault_id
}

resource "azurerm_linux_web_app" "rsk_api" {
  name                      = "${var.project_name}-rsk-api-${module.common.location_shortened}"
  resource_group_name       = var.resource_group_name
  location                  = var.location
  service_plan_id           = azurerm_service_plan.main.id
  virtual_network_subnet_id = var.app_service_subnet_id

  site_config {
    application_stack {
      node_version = local.node_version
    }

    always_on              = true
    vnet_route_all_enabled = true
  }

  app_settings = {
    "DATABASE_URL" = "@Microsoft.KeyVault(SecretUri=${data.azurerm_key_vault_secret.rsk_db_connection_string.versionless_id})"
  }

  # Disable public access
  public_network_access_enabled = false

  identity {
    type = module.common.identity_type.system_assigned
  }
}

resource "azurerm_private_endpoint" "rsk_api" {
  name                = "${var.project_name}-rsk-api-pe-${module.common.location_shortened}"
  location            = var.location
  resource_group_name = var.resource_group_name
  subnet_id           = var.private_endpoint_subnet_id

  private_service_connection {
    name                           = "${var.project_name}-rsk-api-psc"
    private_connection_resource_id = azurerm_linux_web_app.rsk_api.id
    is_manual_connection           = false
    subresource_names              = ["sites"]
  }

  private_dns_zone_group {
    name                 = "default"
    private_dns_zone_ids = [azurerm_private_dns_zone.app_service.id]
  }
}

resource "azurerm_private_dns_a_record" "rsk_api" {
  name                = azurerm_linux_web_app.rsk_api.name
  zone_name           = azurerm_private_dns_zone.app_service.name
  resource_group_name = var.resource_group_name
  ttl                 = 300
  records             = [azurerm_private_endpoint.rsk_api.private_service_connection[0].private_ip_address]
}

resource "azurerm_private_dns_a_record" "rsk_api_scm" {
  name                = "${azurerm_linux_web_app.rsk_api.name}.scm"
  zone_name           = azurerm_private_dns_zone.app_service.name
  resource_group_name = var.resource_group_name
  ttl                 = 300
  records             = [azurerm_private_endpoint.rsk_api.private_service_connection[0].private_ip_address]
}

resource "azurerm_role_assignment" "rsk_api_key_vault" {
  scope                = var.key_vault_id
  role_definition_name = "Key Vault Secrets User"
  principal_id         = azurerm_linux_web_app.rsk_api.identity[0].principal_id
}

# Þjóðskrá API
data "azurerm_key_vault_secret" "national_registry_db_connection_string" {
  name         = "di-tender-db-national-registry-connection-string"
  key_vault_id = var.key_vault_id
}

resource "azurerm_linux_web_app" "national_registry_api" {
  name                      = "${var.project_name}-national-registry-api-${module.common.location_shortened}"
  resource_group_name       = var.resource_group_name
  location                  = var.location
  service_plan_id           = azurerm_service_plan.main.id
  virtual_network_subnet_id = var.app_service_subnet_id

  site_config {
    application_stack {
      node_version = local.node_version
    }

    always_on              = true
    vnet_route_all_enabled = true
  }

  app_settings = {
    "DATABASE_URL" = "@Microsoft.KeyVault(SecretUri=${data.azurerm_key_vault_secret.national_registry_db_connection_string.versionless_id})"
  }

  # Disable public access
  public_network_access_enabled = false

  identity {
    type = module.common.identity_type.system_assigned
  }
}

resource "azurerm_private_endpoint" "national_registry_api" {
  name                = "${var.project_name}-national-registry-api-pe-${module.common.location_shortened}"
  location            = var.location
  resource_group_name = var.resource_group_name
  subnet_id           = var.private_endpoint_subnet_id

  private_service_connection {
    name                           = "${var.project_name}-national-registry-api-psc"
    private_connection_resource_id = azurerm_linux_web_app.national_registry_api.id
    is_manual_connection           = false
    subresource_names              = ["sites"]
  }

  private_dns_zone_group {
    name                 = "default"
    private_dns_zone_ids = [azurerm_private_dns_zone.app_service.id]
  }
}

resource "azurerm_private_dns_a_record" "national_registry_api" {
  name                = azurerm_linux_web_app.national_registry_api.name
  zone_name           = azurerm_private_dns_zone.app_service.name
  resource_group_name = var.resource_group_name
  ttl                 = 300
  records             = [azurerm_private_endpoint.national_registry_api.private_service_connection[0].private_ip_address]
}

resource "azurerm_private_dns_a_record" "national_registry_api_scm" {
  name                = "${azurerm_linux_web_app.national_registry_api.name}.scm"
  zone_name           = azurerm_private_dns_zone.app_service.name
  resource_group_name = var.resource_group_name
  ttl                 = 300
  records             = [azurerm_private_endpoint.national_registry_api.private_service_connection[0].private_ip_address]
}

resource "azurerm_role_assignment" "national_registry_api_key_vault" {
  scope                = var.key_vault_id
  role_definition_name = "Key Vault Secrets User"
  principal_id         = azurerm_linux_web_app.national_registry_api.identity[0].principal_id
}
