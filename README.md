# Interactive Image [![npm version](https://badge.fury.io/js/interactiveimagejs.svg)](http://badge.fury.io/js/interactiveimagejs) [![Code Climate](https://codeclimate.com/github/jpchateau/Interactive-Image/badges/gpa.svg)](https://codeclimate.com/github/jpchateau/Interactive-Image)

> A jQuery plugin to embed interactive images on your website.

## Features

- Interactive texts and images over large pictures
- Flexible configuration
- Easily customizable with CSS
- Lightweight
- Installable via package managers

[See it in action](https://www.jpchateau.com/demo/interactive-image)

## Installation

**Important:** [jQuery](https://jquery.com/download/) is required.
Install it via your package manager, a CDN or simply download it.

**NPM**

```sh
$ npm install --save interactiveimagejs
```

**Yarn**

```sh
$ yarn add interactiveimagejs
```

**Download**

You can also download the production version or the development version from GitHub.
All these files (js, css and fonts) are located in the `dist` directory.

```html
<head>
    <link rel="stylesheet" href="interactive-image.min.css" />
</head>
<body>
    <script src="interactive-image.min.js"></script>
</body>
```

## Usage

Edit the source code of your web page:

**HTML**

```html
<!-- Main container of a scene -->
<div class="interactive-image" style="width:900px;height:600px;background:url('/path/to/main-image.png');">
</div>
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
        picture: "/path/to/picture.jpg"
    },
    {
        title: "Threats",
        description: "Many of the remaining forest areas are too small to ensure...",
        position: {
            left: 660,
            top: 70
        },
        link: {
            href: "https://www.mydomain.com/",
            label: "Website title"
        }
    }
];

// Plugin configuration example (all parameters are optional)
var options = {
      fontColor: "#333333",
      backgroundColor: "#EFEFEF",
      debug: true
  };

// Activate the plugin
$(document).ready(function () {
    $('.interactive-image').interactiveImage(items, options);
});
```

That's it!

## Configuration

### Item

**Item**

| Option name     | Type    | Example                      | Required | Default   | Purpose          |
| --------------- | ------- | ---------------------------- |:--------:| --------- | ---------------- |
| title           | string  | "Lorem ipsum"                | Yes      |           | Title            |
| description     | string  | "Lorem ipsum dolor sit amet" | Yes      |           | Descriptive text |
| position        | object  |                              | Yes      |           | Marker position  |
| picture         | string  | "/path/to/picture.png"       | No       |           | Illustration     |
| link            | object  |                              | No       |           | HTTP Link        |
| fontColor       | string  | "#337733"                    | No       | "#000000" | Text color       |
| backgroundColor | string  | "#EEEEEE"                    | No       | "#FFFFFF" | Background color |

**Position**

| Option name     | Type    | Example | Required | Default | Purpose          |
| --------------- | ------- | ------- |:--------:| ------- | ---------------- |
| left            | integer | 200     | Yes      |         | X absolute value |
| top             | integer | 50      | Yes      |         | Y absolute value |

**Link**

| Option name     | Type    | Example                         | Required | Default    | Purpose             |
| --------------- | ------- | ------------------------------- |:--------:| ---------- | ------------------- |
| href            | string  | "https://www.website.net"       | Yes      |            | href attribute      |
| label           | string  | "Webpage name"                  | No       | href value | Name of the webpage |

### Plugin configuration options

| Option name     | Type    | Example   | Required | Default   | Purpose                 |
| --------------- | ------- | --------- |:--------:| --------- | ----------------------- |
| debug           | boolean | true      | No       | false     | Logs enabled in console |
| fontColor       | string  | "#337733" | No       | "#000000" | Text color              |
| backgroundColor | string  | "#EEEEEE" | No       | "#FFFFFF" | Background color        |

## TODO

- Make the plugin adaptive to all screens
- Picture items
- Audio items
- Video items


## Contribute

Feel free to contribute to this project and open some pull requests.

This jQuery plugin uses [npm](https://www.npmjs.com/) to manage dependencies and [webpack](https://webpack.js.org/) as bundler.

See the complete contributing guidelines [here](CONTRIBUTING.md).


## Alternatives

* Free: [iPicture](https://github.com/vincicat/jQuery-iPicture)
* Premium: [imageLinks](http://avirtum.com/imagelinks-jquery-plugin/)
* For business: [ThingLink](https://www.thinglink.com/)


## License

Copyright (c) 2015-2018 Jean-Philippe Chateau.
This content is released under [the MIT license](https://github.com/jpchateau/Interactive-Image/blob/master/LICENSE).