FROM node:9.6.1 AS builder

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
COPY . /usr/src/app

# install and cache app dependencies
# https://npm.taobao.org/
RUN npm install -g cnpm --silent --registry=https://registry.npm.taobao.org
RUN cnpm install pm2 -g --silent

RUN cnpm install --silent
