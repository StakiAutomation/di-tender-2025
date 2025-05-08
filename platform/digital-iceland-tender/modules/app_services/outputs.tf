output "islandis_api_url" {
  value       = azurerm_linux_web_app.islandis_api.default_hostname
  description = "The URL of the Node API"
}

output "islandis_web_url" {
  value       = azurerm_linux_web_app.islandis_web.default_hostname
  description = "The URL of the Next Web"
}
