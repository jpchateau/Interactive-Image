# Interactive Image

[![npm version](https://badge.fury.io/js/interactiveimagejs.svg)](http://badge.fury.io/js/interactiveimagejs)
[![Bower version](https://badge.fury.io/bo/jquery-interactive-image.svg)](http://badge.fury.io/bo/jquery-interactive-image)
[![Code Climate](https://codeclimate.com/github/jpchateau/Interactive-Image/badges/gpa.svg)](https://codeclimate.com/github/jpchateau/Interactive-Image)
![license](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)

*A jQuery plugin to embed interactive images on your website*

# Features

- Insert interactive texts and images over large pictures
- Flexible configuration
- Easily customizable with CSS
- Installable via npm and bower
- Fully tested with casperjs

View the [demo page](http://www.jpchateau.com/demo/interactive-image)

# Getting started

1. Download [requirejs](http://requirejs.org/docs/download.html) and include it to your source code.

2. Include the required files in your page

```html
<link rel="stylesheet" href="/path/to/css/jquery.interactive-image.min.css" />

<script data-main="main" src="/path/to/js/require.js"></script>
<script src="/path/to/js/jquery.interactive-image.min.js"></script>
```

3. Edit your source code

HTML

```html
<div class="interactive-image"></div>
```

CSS

```css
.interactive-image {
    width: 900px;
    height: 598px;
    background: url('../images/demo/interactive-image/clouded-leopard.jpg');
}
```

JS

```javascript
var items = [
    {
        title: "Fur",
        description: "The fur of clouded leopards is of a dark grey or ochreous ground-colour, often largely obliterated by black and dark dusky-grey blotched pattern.",
        position: {
            left: 710,
            top: 290
        }
    },
    {
        title: "Canines",
        description: "They are often referred to as a \"modern-day saber tooth\" because they have the largest canines in proportion to their body size.",
        position: {
            left: 305,
            top: 345
        },
        picture: "/images/demo/interactive-image/clouded-leopard-head.jpg"
    },
    {
        title: "Threats",
        description: "Many of the remaining forest areas are too small to ensure the long-term persistence of clouded leopard populations. They are threatened by habitat loss following large–scale deforestation and commercial poaching for the wildlife trade.",
        position: {
            left: 660,
            top: 70
        },
        link: {
            href: "http://www.cloudedleopard.org/",
            label: "Clouded Leopard Project"
        }
    }
];

var options = {
    debug: true
};

$('.interactive-image').interactiveImage(items, options);
```

# Configuration

```javascript
var item = {
    title: "Title",                      // Required
    description: "Description",          // Required
    position: {                          // Required
        left: 660,                       // Required
        top: 70                          // Required
    },
    picture: "/path/to/your/picture.png" // Optional
    link: {                              // Optional
        href: "http://www.website.com/", // Required
        label: "Link label"              // Optional (if ommitted, the label is the href value)
    }
};

var options = {
    debug: true // Enables logs in the console
};
```

# Package managers

The plugin can be installed via npm

```bash
$ npm i interactiveimagejs
```

The plugin can be installed via bower

```bash
$ bower install jquery-interactive-image
```

# Testing

Make sure phantomsjs and casperjs are installed on your environment.

```bash
$ cd tests/casperjs
$ casperjs test text-element.js --includes=config.js
```

# Contributing

Feel free to contribute to this project and make some pull requests.
The project uses NPM, Grunt, RequireJS, CasperJS and JSHint.

Here is a list of useful commands:

```bash
$ cp tests/casperjs/config/parameters.json.dist tests/casperjs/config/parameters.json # Creates a local parameters file for casperjs
$ grunt jshint:build # Checks the code quality
$ grunt requirejs # Builds an optimized javascript file named jquery.interactive-image.min.js
```

# License

This content is released under [the MIT license](https://github.com/jpchateau/Interactive-Image/blob/master/LICENSE)
