#!/bin/sh

docker ps -f name=mongo-demo-cloud --format {{.Names}}

