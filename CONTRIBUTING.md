# Contributing

This library uses [npm](https://www.npmjs.com/) to manage dependencies and [webpack](https://webpack.js.org/) as bundler.

Please follow the typical [GitHub Flow](https://guides.github.com/introduction/flow/):
1. Fork it (`git clone git@github.com:jpchateau/Interactive-Image.git`)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push your branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## Installing and building the project

You will need [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your computer.

The building process is guaranteed to work with the latest Active LTS version of Node.js.
Check the releases [here](https://nodejs.org/en/about/releases/).  
Thus, the Travis file mentions Node.js `12`. It might work with previous Node.js versions, but there are unsupported.

Building is done through npm scripts.

**Scripts to run:**

```sh
$ npm install
$ npm run build
```

When working on local files, you can build the project in development mode, start a local server, and view the result in
your web browser at this URL: `http://localhost:8080/examples/index.html`.

**Scripts to run:**

```sh
$ npm run dev
$ npm run start:dev
```

## Icons

Use [IcoMoon](https://icomoon.io/) icon library to export icons from IcoMoon app and include them in the project.  
Just start by importing `src/fonts/selection.json` file into the IcoMoon app.

## Code Quality

An overview of the JavaScript code quality can be found at [code climate](https://codeclimate.com/github/jpchateau/Interactive-Image).

Recommended rules to follow: [ESLint: Recommended](https://eslint.org/docs/rules/).  
Please follow the [Sass guidelines](https://sass-guidelin.es/) when modifying styles.

**Scripts to run:**

```sh
$ npm run eslint
$ npm run sass-lint
```

## Tests

Check out the results of the different builds at [Travis CI](https://travis-ci.org/jpchateau/Interactive-Image).

Unit tests are done with [Mocha](https://mochajs.org/) test framework.  
The assertion library [Chai](https://www.chaijs.com/) is used.

**Scripts to run:**

```sh
$ npm run test
$ npm run test-with-coverage
```

## Project structure

* `dist` - Generated distribution files created by [Webpack](https://webpack.js.org/).
* `docs/_build` - Generated documentation files created by [Sphinx](http://www.sphinx-doc.org/en/master/).
* `docs` - Documentation files using reStructuredText format.
* `examples` - An HTML file that shows how to use the library.
* `src/fonts` - Fonts used by the project.
* `src/js` - Source files (ES2020).
* `src/scss` - Source files (Sass).
* `test` - Unit tests.

## Documentation

The technical documentation is built with [Sphinx](http://www.sphinx-doc.org/en/master/) and hosted at [Read the docs](https://interactive-image.readthedocs.io).  
It uses the reStructuredText format.

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

## Interactive Image Tester

[Here](https://github.com/jpchateau/interactive-image-tester), a repository made to test `Interactive Image` in different contexts.