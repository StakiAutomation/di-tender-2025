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

variable "database_subnet_id" {
  type        = string
  description = "Subnet ID for database subnet"
}

variable "databases" {
  type        = list(string)
  description = "List of databases to create"
}

variable "db_user" {
  type        = string
  description = "The database user"
}

variable "db_password" {
  type        = string
  description = "The database password"
}

variable "key_vault_id" {
  type        = string
  description = "The id of the key vault"
}
