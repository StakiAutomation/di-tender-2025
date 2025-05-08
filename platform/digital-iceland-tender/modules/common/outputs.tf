locals {
  location_map = {
    "northeurope"    = "eu"
    "westeurope"     = "eu"
    "eastus"         = "us"
    "westus"         = "us"
    "eastasia"       = "asia"
    "southeastasia"  = "asia"
    "australiaeast"  = "au"
    "australiasouth" = "au"
  }
}

output "location_shortened" {
  value = lookup(local.location_map, var.location, "unknown")
}

output "identity_type" {
  value = {
    system_assigned = "SystemAssigned"
  }
}
