# Contributing

Please follow the typical [GitHub Flow](https://guides.github.com/introduction/flow/):

1. Fork it (`git clone git@github.com:jpchateau/Interactive-Image.git`)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push your branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## Installing and building the project

You need [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your computer.
Building is done through npm scripts.

```sh
$ npm install
$ npm run build
```

When working on local files, you can build the project in development mode, start a local server, and view the result in
your web browser at this URL: `http://localhost:8080/demo/demo.html`.

```sh
$ npm run dev
$ npm run start:dev
```

### Icons

Use [IcoMoon](https://icomoon.io/) icon library to export icons from IcoMoon app and include them in the project.  
Just start by importing `src/fonts/selection.json` file into the IcoMoon app.

## Code Quality

```sh
$ npm run eslint
$ npm run sass-lint
$ npm run test
```

Recommended rules to follow: [ESLint: Recommended](https://eslint.org/docs/rules/).  
Please follow the [Sass guidelines](https://sass-guidelin.es/) when modifying styles.

An overview of the JavaScript code quality can be found at [code climate](https://codeclimate.com/github/jpchateau/Interactive-Image).

Unit tests are done with [Mocha](https://mochajs.org/) test framework.
The assertion library [Chai](https://www.chaijs.com/) is used.

Check out for the results of the different builds on [Travis CI](https://travis-ci.org/jpchateau/Interactive-Image).

## npm script reference

| Command                      | Function                                                |
| ---------------------------- | ------------------------------------------------------- |
| `npm run build`              | Build all the optimized distributable files             |
| `npm run dev`                | Build all the distributable files for local development |
| `npm run eslint`             | Run the ES linter                                       |
| `npm run sass-lint`          | Run the Sass linter                                     |
| `npm run start:dev`          | Start a local server                                    |
| `npm run test`               | Run unit tests                                          |
| `npm run test-with-coverage` | Run unit tests and display code coverage                |
| `npm run watch`              | Run the watcher for local development                   |
