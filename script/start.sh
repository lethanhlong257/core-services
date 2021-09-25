#!/bin/bash

set -e # stop on command error

if [ -z "`docker network ls | grep icommerce_local_network`" ]; then
  echo "Creating custom docker network for sharing connectivity ..."
  docker network create --driver bridge --subnet "172.95.0.0/16" icommerce_local_network
fi

mkdir ./data/postgres-12.8/ || true

echo ">>> Launching services ..."
docker-compose up -d

echo ""
echo ">>> All services are ready."
