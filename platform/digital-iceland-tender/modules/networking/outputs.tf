output "app_services_subnet_id" {
  value       = azurerm_subnet.app_services.id
  description = "The id of the app services subnet"
}

output "databases_subnet_id" {
  value       = azurerm_subnet.databases.id
  description = "The id of the databases subnet"
}

output "private_endpoint_subnet_id" {
  value       = azurerm_subnet.private_endpoints.id
  description = "The id of the private endpoints subnet"
}

output "vnet_main_id" {
  value       = azurerm_virtual_network.main.id
  description = "Id of the main virtual network"
}

output "vnet_main_name" {
  value       = azurerm_virtual_network.main.name
  description = "Name of main virtual network"
}
