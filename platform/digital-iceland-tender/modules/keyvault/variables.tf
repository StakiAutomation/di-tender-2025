variable "project_name" {
  type        = string
  description = "Name of the project"
}

variable "environment" {
  type        = string
  description = "Environment of the infrastructure"
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

variable "virtual_network_id" {
  type        = string
  description = "The ID of the virtual network"
}

variable "allowed_ip_ranges" {
  type        = list(string)
  description = "List of IP addresses or CIDR ranges that can access the Key Vault"
  default     = []
}

variable "allowed_subnet_ids" {
  type        = list(string)
  description = "List of subnet IDs that can access the Key Vault"
  default     = []
}

variable "private_endpoint_subnet_id" {
  type        = string
  description = "ID of the private endpoint subnet"
}
