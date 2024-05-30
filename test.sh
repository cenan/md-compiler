#!/bin/sh

jq -Rs --rawfile cl $1 '{code: $cl}' . > tmp.json

# curl localhost:3000/ -H "Content-Type: application/json" -X POST --data @tmp.json
curl https://md-compiler.vercel.app/ -H "Content-Type: application/json" -X POST --data @tmp.json
rm tmp.json
