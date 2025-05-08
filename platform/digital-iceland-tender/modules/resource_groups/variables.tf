variable "project_name" {
  type        = string
  description = "Name of the project"
}

variable "environment" {
  type        = string
  description = "Environment of the infrastructure"
}

variable "location" {
  type        = string
  description = "Location of the resource"
  default     = "northeurope"
}
