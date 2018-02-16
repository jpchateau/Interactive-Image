# Interactive Image [![Build Status](https://travis-ci.org/jpchateau/Interactive-Image.svg?branch=master)](https://travis-ci.org/jpchateau/Interactive-Image) [![npm version](https://badge.fury.io/js/interactiveimagejs.svg)](http://badge.fury.io/js/interactiveimagejs) [![Code Climate](https://codeclimate.com/github/jpchateau/Interactive-Image/badges/gpa.svg)](https://codeclimate.com/github/jpchateau/Interactive-Image)

> A jQuery plugin to embed interactive images on your website.

## Features

- Insert interactive texts and images over large pictures
- Flexible configuration
- Easily customizable with CSS
- Fully tested
- Installable via package managers

[See it in action](http://www.jpchateau.com/demo/interactive-image)

## Installation

**NPM**

```sh
npm install --save interactiveimagejs
```
or 

Install it by downloading the files located in the `lib` directory of this project.

## Usage

**Important note:** [jQuery](https://jquery.com/download/) is required.

Edit the source code of your web pages:

**HTML**

```html
<link rel="stylesheet" href="interactive-image.min.css" />
<script src="interactive-image.min.js"></script>
<div class="interactive-image" style="width: 900px; height: 600px; background: url('/path/to/images/image.jpg');"></div>
```

**JavaScript**

```javascript
// Items collection
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
            href: "http://www.website.org/",
            label: "Website"
        }
    }
];

// Activate the plugin
$(document).ready(function() {
    $('.interactive-image').interactiveImage(items, options);
});
```

## Configuration

**Item**

| Option name     | Type    | Example                      | Required | Default   | Purpose          |
| --------------- | ------- | ---------------------------- | -------- | --------- | ---------------- |
| title           | string  | "Lorem ipsum"                | Yes      |           | Title            |
| description     | string  | "Lorem ipsum dolor sit amet" | Yes      |           | Descriptive text |
| position        | object  |                              | Yes      |           | Marker position  |
| picture         | string  | "/path/to/your/picture.png"  | No       |           | Illustration     |
| link            | object  |                              | No       |           | HTTP Link        |
| fontColor       | string  | "#337733"                    | No       | "#000000" | Text color       |
| backgroundColor | string  | "#EEEEEE"                    | No       | "#FFFFFF" | Background color |

**Position**

| Option name     | Type    | Example | Required | Default | Purpose          |
| --------------- | ------- | ------- | -------- | ------- | ---------------- |
| left            | integer | 200     | Yes      |         | X absolute value |
| top             | integer | 50      | Yes      |         | Y absolute value |

**Link**

| Option name     | Type    | Example                         | Required | Default    | Purpose             |
| --------------- | ------- | ------------------------------- | -------- | ---------- | ------------------- |
| href            | string  | "https://www.your-website.com/" | Yes      |            | href attribute      |
| label           | string  | "Your webpage name"             | No       | href value | Name of the webpage |

**Plugin configuration options**

| Option name     | Type    | Example   | Required | Default   | Purpose                 |
| --------------- | ------- | --------- | -------- | --------- | ----------------------- |
| debug           | boolean | true      | No       | false     | Logs enabled in console |
| fontColor       | string  | "#337733" | No       | "#000000" | Text color              |
| backgroundColor | string  | "#EEEEEE" | No       | "#FFFFFF" | Background color        |


## Contribute

Feel free to contribute to this project and open some pull requests.

Interactive Image plugin uses npm and webpack. QUnit is required to execute the tests.

See the complete contributing guidelines [here](CONTRIBUTING.md).


## Alternatives

* Free: [iPicture](https://github.com/vincicat/jQuery-iPicture)
* Premium: [imageLinks](http://avirtum.com/imagelinks-jquery-plugin/)
* For business: [ThingLink](https://www.thinglink.com/)


## License

Copyright (c) 2015-2018 Jean-Philippe Chateau.
This content is released under [the MIT license](https://github.com/jpchateau/Interactive-Image/blob/master/LICENSE).
