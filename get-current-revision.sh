#!/bin/bash

## Prerequisites
## az login --use-device-code
##

# Ensure the containerapp extension is installed
az extension add --name containerapp

# Enable the preview features for containerapp
az config set extension.use_dynamic_install=yes_without_prompt

DOTENV_PATH=".env.local"

# Load environment variables from .env file into the script's environment
if [ -f $DOTENV_PATH ]; then
  set -a
  source $DOTENV_PATH
  set +a
else
  echo "Error: .env file not found at $DOTENV_PATH"
  exit 1
fi

# Debug: Display all environment variables loaded from .env
echo "Loaded environment variables from $DOTENV_PATH:"
while IFS='=' read -r key value; do
  echo "$key=$value"
done < $DOTENV_PATH

# Capture the revision value in ACA
ACA_REVISION=$(az containerapp show \
  --subscription $AZURE_SUBSCRIPTION_ID \
  -g $AZURE_RESOURCE_GROUP \
  -n $AZURE_CONTAINER_APP_NAME \
  --query properties.latestRevisionName)

# Capture the container name in ACA
ACA_CONTAINER=$(az containerapp show \
  --subscription $AZURE_SUBSCRIPTION_ID \
  -g $AZURE_RESOURCE_GROUP \
  -n $AZURE_CONTAINER_APP_NAME \
  --query properties.template.containers[0].image)



# Echo the revision value
echo "Current Revision: $ACA_REVISION"
echo "Current Container: $ACA_CONTAINER"