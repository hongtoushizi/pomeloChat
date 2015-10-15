#!/bin/bash

echo "game-server--------- restart"
pomelo restart 
echo "web-serverr-----------estart"
pm2 reload  all
