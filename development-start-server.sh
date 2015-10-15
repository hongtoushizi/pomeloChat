#!/bin/bash

cd ./web-server
NODE_ENV=development  pm2 start  app.js  --name web-server

#pomelo start  --env production   --daemon
