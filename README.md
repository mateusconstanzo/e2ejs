# e2ejs

e2ejs is a testing tool based on [Cucumber](https://cucumber.io/) and [Protactor](https:/www.protractortest.org/) with many predefined steps.

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![Linux Build][travis-image]][travis-url]

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the [npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/). 

Installation is done using the [`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install e2ejs
```

## Features

  * Steps predefined
  * Ease of setup
  * HTML Reports

## Steps

This section contains a list with all predefined steps.

[Full List](STEPS.md)

## Getting Started

### Feture

```cucumber
Feature: Search on Google

Scenario: Search e2ejs
    Then I navigate to "http://www.google.com.br"
    Then I enter "e2ejs" into input field having id "lst-ib"
    Then I click on element having name "btnK"
    Then I click on link having text "GitHub - mateusconstanzo/e2ejs"
    Then I expect to see "mateusconstanzo/e2ejs" on page
```

### Examples

* [Google](./examples/google)
* [Google - MultiBrowser](./examples/google-multibrowser)
* [Step Custom](./examples/step-custom)
* [Steps](./examples/steps)


## Configuration options 

```

  protractor dist/config.js -- --pathFeature=<feature-path> --feature=<feature-name>

  protractor dist/config.js -- --feature=google

  protractor dist/config.js -- --pathFeature=/feature --feature=playground,dashboard,...

```

[npm-image]: https://img.shields.io/npm/v/e2ejs.svg
[npm-url]: https://npmjs.org/package/e2ejs
[downloads-image]: https://img.shields.io/npm/dm/e2ejs.svg
[downloads-url]: https://npmjs.org/package/e2ejs
[travis-image]: https://img.shields.io/travis/mateusconstanzo/e2ejs/master.svg?label=linux
[travis-url]: https://travis-ci.org/mateusconstanzo/e2ejs