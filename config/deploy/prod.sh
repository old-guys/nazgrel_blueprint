#!/bin/bash

echo "##### "
echo "##### deploy nazgrel_blueprint 正式环境"
echo "#####"

WWW_DIR="public/"
TARGET_DIR="/ishanggang/apps/nazgrel_blueprint_production"

rsync -avz -e 'ssh -p 40022' $WWW_DIR ishanggang_dev@106.14.159.184:$TARGET_DIR
