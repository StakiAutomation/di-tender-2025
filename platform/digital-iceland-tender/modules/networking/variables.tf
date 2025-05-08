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

variable "address_space" {
  type        = string
  description = "Address space for the virtual network"
}
