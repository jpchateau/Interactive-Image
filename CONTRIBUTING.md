# Contributing

Please follow the typical [GitHub Flow](https://guides.github.com/introduction/flow/):

1. Fork it (`git clone git@github.com:jpchateau/Interactive-Image.git`)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push your branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## Installing and building the project

You need Node, NPM and SASS installed on your computer.

Building is done through npm scripts.

```sh
$ npm install
$ npm run build
```

## Code Quality

```sh
$ npm run lint -s
```

Recommended rules to follow: [ESLint: Recommended](https://eslint.org/docs/rules/)

An overview of the code quality can be found at [code climate](https://codeclimate.com/github/jpchateau/Interactive-Image).

## npm script reference

| Command          | Function                                                |
|------------------|---------------------------------------------------------|
| `npm run dev`    | Build all the distributable files for local development |
| `npm run build`  | Build all the optimized distributable files             |
| `npm run lint`   | Run the ES linter                                       |
| `npm run watch`  | Run the watcher for local development                   |