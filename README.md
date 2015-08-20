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

## Include the required files

Download [RequireJS](http://requirejs.org/docs/download.html) and include it to your source code
```html
<script data-main="main" src="path/to/js/require.js"></script>
```

Repeat the trick for [jQuery](https://jquery.com/download/)
```html
<script src="path/to/js/jquery-2.1.4.min.js"></script>
```

Include the plugin files in your page
```html
<link rel="stylesheet" href="/path/to/css/interactive-image.min.css" />
<script src="/path/to/js/jquery.interactive-image.min.js"></script>
```

## Edit your source code

**HTML**

```html
<div class="interactive-image"></div>
```

**CSS**

```css
.interactive-image {
    width: 900px;
    height: 598px;
    background: url('/path/to/images/image.jpg');
}
```

**JS**

```javascript
var items = [
    {
        title: "Fur",
        description: "The fur of clouded leopards is of a dark grey or ochreous...",
        position: {
            left: 710,
            top: 290
        }
    },
    {
        title: "Canines",
        description: "They are often referred to as a \"modern-day saber tooth\"...",
        position: {
            left: 305,
            top: 345
        },
        picture: "/path/to/images/picture.jpg"
    },
    {
        title: "Threats",
        description: "Many of the remaining forest areas are too small to ensure...",
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
// Item configuration
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
        label: "Link label"              // Optional
    }
};

// Plugin configuration
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

# Tests

Make sure phantomsjs and casperjs are installed on your environment.

```bash
$ cd tests/casperjs
$ casperjs test text-element.js --includes=config.js
```

# Contribute

Feel free to contribute to this project and open some pull requests.
The project uses NPM, Grunt, RequireJ and CasperJS.

Here is a list of useful commands:

```bash
$ cd tests/casperjs/config && cp parameters.json.dist parameters.json # Creates a local parameters file
$ grunt jshint:build # Checks the code quality
$ grunt requirejs # Builds an optimized javascript file
$ grunt cssmin # Concatenate and minify the css files
```

# Alternatives

For business: [ThingLink](https://www.thinglink.com/)

Free: [iPicture](http://ipicture-square.justmybit.com/)

# License

This content is released under [the MIT license](https://github.com/jpchateau/Interactive-Image/blob/master/LICENSE)
