Nazgrel Api Doc
========
> build with blueprint

Features
------------

* **Clean, intuitive design**

* **Everything on a single page**

Getting Started
------------------------------

- [examples](https://github.com/apiaryio/api-blueprint/tree/master/examples)

### Prerequisites

You're going to need:

 - **Linux or OS X** — Windows may work, but is unsupported.
 - **Node** — To install node navagate to [download page](https://nodejs.org/zh-cn/download/).

### Getting Set Up

 1. Fork this repository on Github.
 2. Clone *your forked repository* (not our original one) to your hard drive with `git clone ssh://git@gitlab.ishanggang.com/bi/nazgrel_blueprint.git`
 3. `cd nazgrel_blueprint`
 4. Install all dependencies: `npm install`

### Development Channel api

 1. Start the Mock server: `npm run start_channel`
 2. Generate html file: `npm run generate_channel`
 3. test mock api: `npm run test_channel`

### Development Mobile api

 1. Start the Mock server: `npm run start_mobile`
 2. Generate html file: `npm run generate_mobile`
 3. test mock api: `npm run test_mobile`

### Development Web api

 1. Start the Mock server: `npm run start_web`
 2. Generate html file: `npm run generate_web`
 3. test mock api: `npm run test_web`

### Development Dev api

 1. Start the Mock server: `npm run start_dev`
 2. Generate html file: `npm run generate_dev`
 3. test mock api: `npm run test_dev`

### Development Open Mobile api

 1. Start the Mock server: `npm run start_open_mobile`
 2. Generate html file: `npm run generate_open_mobile`
 3. test mock api: `npm run test_open_mobile`

### Deploy document

 1. Deploy index html: `npm run deploy-prod`
 2. Deploy mobile html: `npm run deploy-open`

### Deploy Mock server

deploy via [shipit](https://github.com/shipitjs/shipit), [shipit-deploy](https://github.com/shipitjs/shipit-deploy)

```shell
shipit prod pwd
shipit prod deploy
shipit prod npm:init npm:install

shipit prod start_web &
shipit prod start_channel &
shipit prod start_dev &
shipit prod start_open_mobile &

shipit prod ps
shipit prod stop
```

### Clean Html

1. Start the Mock server: `npm run clean`