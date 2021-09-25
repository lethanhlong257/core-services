#!/bin/bash

cd ./db

npx sequelize-cli db:seed:all
