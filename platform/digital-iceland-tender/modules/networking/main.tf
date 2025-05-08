module "common" {
  source = "../common"

  location = var.location
}

resource "azurerm_virtual_network" "main" {
  name                = "${var.project_name}-${var.environment}-vnet-${module.common.location_shortened}"
  resource_group_name = var.resource_group_name
  location            = var.location
  address_space       = [var.address_space]
}

resource "azurerm_subnet" "app_services" {
  name                 = "${var.project_name}-${var.environment}-app-services-subnet-${module.common.location_shortened}"
  resource_group_name  = var.resource_group_name
  virtual_network_name = azurerm_virtual_network.main.name
  address_prefixes     = [cidrsubnet(var.address_space, 8, 1)]

  service_endpoints = ["Microsoft.KeyVault"]

  delegation {
    name = "app-service-delegation"
    service_delegation {
      name = "Microsoft.Web/serverFarms"
    }
  }
}

resource "azurerm_subnet" "databases" {
  name                 = "${var.project_name}-${var.environment}-databases-subnet-${module.common.location_shortened}"
  resource_group_name  = var.resource_group_name
  virtual_network_name = azurerm_virtual_network.main.name
  address_prefixes     = [cidrsubnet(var.address_space, 8, 2)]

  delegation {
    name = "postgres-delegation"
    service_delegation {
      name = "Microsoft.DBforPostgreSQL/flexibleServers"
      actions = [
        "Microsoft.Network/virtualNetworks/subnets/join/action"
      ]
    }
  }
}

resource "azurerm_subnet" "private_endpoints" {
  name                 = "${var.project_name}-private-endpoints-subnet-${module.common.location_shortened}"
  resource_group_name  = var.resource_group_name
  virtual_network_name = azurerm_virtual_network.main.name
  address_prefixes     = [cidrsubnet(var.address_space, 8, 4)]
}
