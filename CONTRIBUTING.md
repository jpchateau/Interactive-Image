# Contributing

Please follow the typical [GitHub Flow](https://guides.github.com/introduction/flow/):

1. Fork it (`git clone git@github.com:jpchateau/Interactive-Image.git`)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push your branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## Building and testing

Building and testing is done through npm scripts.
You need to install [CasperJS](http://casperjs.org/) to run the tests.

```sh
$ npm install
$ npm install -g casperjs
$ npm run build
$ npm run test
```

## Code Quality

```sh
$ npm run lint
```

Recommended rules to follow: [ESLint: Recommended](https://eslint.org/docs/rules/)

An overview of the code quality can be found at [code climate](https://codeclimate.com/github/jpchateau/Interactive-Image).

## npm script reference

| Command          | Function                                                |
|------------------|---------------------------------------------------------|
| `npm run dev`    | Build all the distributable files for local development |
| `npm run build`  | Build all the optimized distributable files             |
| `npm run test`   | Run the test suite with CasperJS and PhantomJS          |
| `npm run lint`   | Run the ES linter                                       |
| `npm run watch`  | Run the watcher for local development                   |