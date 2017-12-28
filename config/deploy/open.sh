#!/bin/bash

echo "##### "
echo "##### deploy nazgrel_blueprint 开放平台"
echo "#####"

WWW_DIR="open_public/"
TARGET_DIR="/ishanggang/apps/nazgrel_blueprint_open"

rsync -avz -e 'ssh -p 40022' $WWW_DIR ishanggang_dev@106.14.159.184:$TARGET_DIR
