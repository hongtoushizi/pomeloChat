#!/bin/bash

pids=$(ps aux |grep node |grep -v grep|grep game-server |awk -F' ' '{print $2}')

echo "pid";


for id in $pids
do 
  echo $id
  kill -9 $id
done


