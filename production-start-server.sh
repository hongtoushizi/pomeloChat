#!/bin/bash
cd ./web-server
NODE_ENV=production pm2 start  app.js  --name web-server
# NODE_ENV=production    pomelo start  --env production   --daemon
