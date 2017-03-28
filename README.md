# botkit-glip-starter-app


[![Code-Style:Standard](https://img.shields.io/badge/code%20style-standard-green.svg?style=flat-square)](http://standardjs.com/)
[![License:MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](http://opensource.org/licenses/MIT)

`botkit-glip-starter-app` is a starter app allows you to create bots with Glip using [Botkit](https://www.github.com/howdyai/botkit).

It takes advantage of Botkit's core functionality thus allowing you to create complex conversational flows via a simple interface. It also allows you to use [custom storage methods/systems](https://github.com/howdyai/botkit/blob/master/readme.md#storing-information) to enable data persistence across sessions.

#### What is Botkit?

Here's an excerpt of Botkit's `readme.md` file:

> [[Botkit](https://www.github.com/howdyai/botkit)] provides a semantic interface to sending and receiving messages so that developers can focus on creating novel applications and experiences instead of dealing with API endpoints.

## Installation

```bash
$ git clone https://github.com/pkvenu/botkit-glip-starter-app.git
$ cd <APP_DIRECTORY>
$ npm install  
```

## Config
Update **.env** file with the credentails for the below properties:
```
GLIP_SERVER=https://platform.devtest.ringcentral.com
GLIP_APPKEY=
GLIP_APPSECRET=
GLIP_USERNAME=
GLIP_PASSWORD=
GLIP_EXTENSION=
```

## Run
```
$ npm start
```

## Reference

Please see `botkit`'s guide and reference document [here](https://github.com/howdyai/botkit/blob/master/readme.md#developing-with-botkit).


## Contributing

#### Bug Reports & Feature Requests

Something does not work as expected or perhaps you think this module needs a feature? Please [open an issue](https://github.com/pkvenu/botkit-salesforce-bot/issues/new) using GitHub's [issue tracker](https://github.com/pkvenu/salesforce-bot/issues). Please be as specific and straightforward as possible.

#### Developing

Pull Requests (PRs) are welcome. Make sure you follow the same basic stylistic conventions as the original code (i.e. ["JavaScript standard code style"](http://standardjs.com)). Your changes must be concise and focus on solving a single problem.

## License

[The MIT License (MIT)](http://opensource.org/licenses/MIT)

Copyright (c) 2016 
