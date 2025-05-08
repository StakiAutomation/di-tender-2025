variable "project_name" {
  type        = string
  description = "Name of the project"
}

variable "resource_group_name" {
  type        = string
  description = "Name of resource group for the platform"
}

variable "location" {
  type        = string
  description = "Location of the resource"
  default     = "northeurope"
}

variable "app_service_plan_sku" {
  type        = string
  description = "App service plan's SKU"
  default     = "B1"
}

variable "app_service_plan_os_type" {
  type        = string
  description = "App service plan's OS type"
  default     = "Linux"
}

variable "virtual_network_id" {
  type        = string
  description = "ID of the virtual network"
}

variable "app_service_subnet_id" {
  type        = string
  description = "ID of the app service subnet (Delegated)"
}

variable "private_endpoint_subnet_id" {
  type        = string
  description = "ID of the private endpoint subnet"
}

variable "key_vault_id" {
  type        = string
  description = "The id of the key vault"
}
