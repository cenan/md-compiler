#!/bin/sh

jq -Rs --rawfile cl $1 '{code: $cl}' . > tmp.json

curl localhost:1453 -H "Content-Type: application/json" -X POST --data @tmp.json
rm tmp.json
