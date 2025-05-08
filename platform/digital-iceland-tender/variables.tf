variable "project_name" {
  type        = string
  description = "Name of the project"
}

variable "environment" {
  type        = string
  description = "Environment of the infrastructure"
  default     = "dev"
}

variable "location" {
  type        = string
  description = "Location of the resource"
  default     = "northeurope"
}

variable "vnet_address_space" {
  type        = string
  description = "Address space for the virtual network"
  default     = "10.0.0.0/16"
}

variable "subscription_id" {
  type        = string
  description = "Id of the Azure subscription"
}

variable "allowed_ip_ranges_for_key_vault" {
  type        = list(string)
  description = "Allowed IP ranges to key vault"
  default     = []
}

variable "databases" {
  type        = list(string)
  description = "A list of PostgreSQL databases that should be created"
}

variable "db_user" {
  type        = string
  description = "The database user"
}

variable "db_password" {
  type        = string
  description = "The database password"
}
