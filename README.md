# Interactive Image

[![npm version](https://badge.fury.io/js/interactiveimagejs.svg)](http://badge.fury.io/js/interactiveimagejs)
[![Code Climate](https://codeclimate.com/github/jpchateau/Interactive-Image/badges/gpa.svg)](https://codeclimate.com/github/jpchateau/Interactive-Image)
![license](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)

*A jQuery plugin to embed interactive images on your website*

# Features

- Insert interactive texts and images over large pictures
- Easily configurable (JSON style)
- Easily customizable with CSS
- Installable via npm and bower

View the [demo page](http://www.jpchateau.com/demo/interactive-image)

#  Getting started

Edit your html file

```html
<div class="interactive-image"></div>
```

Edit your css file

```css
.interactive-image {
    width: 900px;
    height: 598px;
    background: url('../images/demo/interactive-image/clouded-leopard.jpg');
}
```

Edit your javascript file

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

# License

This content is released under [the MIT license](https://github.com/jpchateau/Interactive-Image/blob/master/LICENSE)
