# Contributing

Please follow the typical GitHub workflow:

1. Fork it (`git clone git@github.com:jpchateau/Interactive-Image.git`)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## Tests

```sh
$ npm install -g qunit
$ npm run test
```

## Code Quality

```sh
$ npm run eslint
```

Recommended rules to follow: https://eslint.org/docs/rules/

An overview of the code quality can be found at [code climate](https://codeclimate.com/github/jpchateau/Interactive-Image).

## Install

Install the dependencies:

```sh
$ npm install
```

Build the files locally:

```sh
$ npm run dev
```

Open `./lib/index.html` in your browser to see the result.
