module "common" {
  source = "../common"

  location = var.location
}

resource "azurerm_resource_group" "main" {
  name     = "${var.project_name}-${var.environment}-rg-${module.common.location_shortened}"
  location = var.location

  tags = {
    Environment = var.environment
    Project     = var.project_name
    ManagedBy   = "Terraform"
    CreatedDate = timestamp()
  }
}
