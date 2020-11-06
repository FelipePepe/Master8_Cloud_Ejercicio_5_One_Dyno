#!/bin/bash
mkdir -p ./dist/public

cd ../Master8_Cloud_Ejercicio_5_FrontEnd
npm install
npm run build
cp -r ./dist/. ../Master8_Cloud_Ejercicio_5_One_Dyno/dist/public
