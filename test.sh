#!/bin/sh

containerName=`docker ps -f name=mongo-demo-cloud --format {{.Names}}`

if test "$containerName" = "mongo-demo-cloud"
then
  echo Server is up
  exit 1
else
  echo Server is down
  exit 2
fi

