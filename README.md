# Interactive Image

[![npm version](https://badge.fury.io/js/interactiveimagejs.svg)](http://badge.fury.io/js/interactiveimagejs)
[![Code Climate](https://codeclimate.com/github/jpchateau/Interactive-Image/badges/gpa.svg)](https://codeclimate.com/github/jpchateau/Interactive-Image)
![license](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)

*A jQuery plugin to embed interactive images on your website*

# Features

- Insert interactive texts and images over large pictures
- Easily configurable
- Lightweight
- Installable via npm and bower

View the [demo page](http://www.jpchateau.com/demo/interactive-image)

#  Getting started

Edit your html file

```html
<div class="interactive-image"></div>
```

Edit your javascript file

```javascript
var items = [
    {
        title: "Vitres tintées",
        description: "Revêtement unique",
        left: 360,
        top: 280
    },
    {
        title: "Sécurité renforcée",
        description: "Ouverture latérale",
        left: 530,
        top: 440
    },
    {
        title: "Moteur V8",
        description: "Accélération puissante",
        left: 1000,
        top: 380
    }
];
$('.interactive-image').interactiveImage(items, {debug: true});
```

# Configuration

```javascript
var config = {
    debug: true // Enables logs in the console
};
```

# Package managers

The plugin can be installed via npm

```bash
$ npm i interactiveimagejs
```

# License

This content is released under the MIT license
