#!/bin/sh

if [ "${1}" == "live" ]
then
  echo "deploy to live"
  hugo 
  rsync --progress --delete -avz -e "ssh -p 50022" docs/* frintropinfo@frintrop.info:frintrop.info/httpdocs/
fi
if [ "${1}" == "test" ]
then
  echo "deploy to test"
  hugo --baseURL https://test.frintrop.info ${2}
  rsync --progress --delete -avz -e "ssh -p 50022" docs/* frintropinfo@frintrop.info:frintrop.info/dev/httpdocs/
fi

