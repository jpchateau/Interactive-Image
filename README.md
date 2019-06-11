# Interactive Image [![npm version](https://badge.fury.io/js/interactiveimagejs.svg)](http://badge.fury.io/js/interactiveimagejs) [![Build Status](https://travis-ci.org/jpchateau/Interactive-Image.svg?branch=master)](https://travis-ci.org/jpchateau/Interactive-Image) [![Code Climate](https://codeclimate.com/github/jpchateau/Interactive-Image/badges/gpa.svg)](https://codeclimate.com/github/jpchateau/Interactive-Image)

> A jQuery plugin to embed interactive images on your website.

[![Demo](./docs/demo.png)](https://www.jpchateau.com/demo/interactive-image)

See it in action on the [demo page](https://www.jpchateau.com/demo/interactive-image).

## Features

* Interactive videos, sounds, images and texts over large pictures
* Support for content providers: Youtube, Dailymotion
* Social media sharing capabilities: email, Twitter
* Flexible configuration of markers and items
* Easily customizable with CSS
* Unit tested with [Mocha](https://mochajs.org/)
* Installable via package managers
* No restriction on commercial use

## Installation

**npm**

```sh
$ npm install --save interactiveimagejs
```

**Yarn**

```sh
$ yarn add interactiveimagejs
```

**Download**

Download the production or the development version from GitHub.  
All the files (.js, .css and fonts) are located in the `dist` directory.

## Usage

### How to use it

Edit the source code of your web page:

**HTML**

```html
<head>
  <!-- Include Interactive Image jQuery plugin Styles -->
  <link rel="stylesheet" href="interactive-image.min.css" />
  
  <!-- Specific styles of a scene -->
  <style>
  .interactive-image {
    width: 900px;
    height: 600px;
    background: url("/path/to/main-image.png");
  }
  </style>
</head>
<body>
  <!-- Main container of a scene -->
  <div id="my-interactive-image"></div>  
  
  <!-- Include jQuery -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

  <!-- Include Interactive Image jQuery plugin JavaScript -->
  <script src="interactive-image.min.js"></script>
</body>
```

**Note regarding the css file:** You may have to rewrite the relative paths of the fonts.

**JavaScript**

```javascript
// Items collection
var items = [
  {
    type: "text",
    title: "Fur",
    description: "The fur of clouded leopards is...",
    position: {
        left: 100,
        top: 50
    }
  },
  {
    type: "picture",
    path: "/path/to/picture.png",
    caption: "A baby clouded leopard",
    position: {
      left: 200,
      top: 300
    }
  },
  {
    type: "audio",
    path: "/path/to/sound.mp3",
    caption: "A clouded leopard growl",
    position: {
      left: 300,
      top: 500
    }
  },
  {
    type: "video",
    path: "/path/to/video.mp4",
    caption: "A clouded leopard walking",
    poster: "/path/to/poster.png",
    position: {
      left: 400,
      top: 550
    }
  },
  {
    type: "provider",
    providerName: "youtube",
    parameters: {
      videoId: "iPRiQ6SBntQ"
    },
    position: {
      left: 600,
      top: 550
    }
  }
];

// Plugin activation
$(document).ready(function() {
  $("#my-interactive-image").interactiveImage(items);
});
```

### Social Media Share

By default, a social media share box is displayed.  
You can prevent this behavior by passing `false` to the `shareBox` option, before activating the plugin.
```javascript
var options = {
  shareBox: false
};

$(".interactive-image").interactiveImage(items, options);
```

You can customize the social media share properties of your Interactive Image:
```javascript
var options = {
  socialMedia: {
    url: "https://www.jpchateau.com/demo/interactive-image",
    text: "Clouded Leopard",
    hashtags: ["jQuery", "cloudedLeopard"],
    twitterUsername: "my_twitter_account",
  }
}

$(".interactive-image").interactiveImage(items, options);
```

Supported social media: email and Twitter.  
In case of email share, the subject of the email is the webpage title.

### Style customization

You may want to change the rendering of an item, as for example the background and the front color of text items.  
Adapt this CSS snippet to your needs and add it after the `interactive-image` css file is loaded:

```css
.interactive-image .text-item {
  background-color: blue;
  color: yellow;
}
```

### Debugging

In order to display some console messages to see the different steps of the processing, add an `options` object to the app initialization:

```javascript
var options = {
  debug: true
};

$(".interactive-image").interactiveImage(items, options);
```

## Configuration

### Plugin configuration options

**Options**

| Property | Type    | Example | Required | Default | Purpose                   |
| ---------| --------| ------- |:--------:| ------- | ------------------------- |
| debug    | boolean | true    | No       | false   | Enable logs in console    |
| shareBox | boolean | false   | No       | true    | Enable social media share |

**SocialMedia options**

| Property        | Type   | Example                      | Required | Default      | Purpose          |
| --------------- | ------ | ---------------------------- |:--------:| ------------ | ---------------- |
| url             | string | "http://www.example.com"     | No       | Document URL | Custom URL       |
| text            | string | "Text"                       | No       | Page title   | Text             |
| hashtags        | array  | ["jQuery", "cloudedLeopard"] | No       |              | Hashtags         |
| twitterUsername | string | "my_twitter_account          | No       |              | Twitter account  |

### Items

Each item has several possibilities of configuration.  
You can add a link and/or a picture to your `text` items, or a caption to your `picture`, `audio` or `video` items.

**Text Item**

| Property    | Type   | Example                | Required | Default         | Purpose                       |
| ----------- | ------ | ---------------------- |:--------:| --------------- | ----------------------------- |
| type        | string | "text"                 | Yes      |                 | Item type                     |
| position    | object | See `Position` object  | No       | {left:0, top:0} | Hotspot position on the scene |
| title       | string | "My title"             | Yes      |                 | Title                         |
| description | string | "My description"       | Yes      |                 | Descriptive text              |
| picturePath | string | "/path/to/picture.png" | No       |                 | Illustration source path      |
| link        | object | See `Link` object      | No       |                 | HTTP Link                     |

**Picture Item**

| Property    | Type   | Example                | Required | Default         | Purpose                        |
| ----------- | ------ | ---------------------- |:--------:| --------------- | ------------------------------ |
| type        | string | "picture"              | Yes      |                 | Item type                      |
| position    | object | See `Position` object  | No       | {left:0, top:0} | Hotspot position on the scene  |
| path        | string | "/path/to/picture.png" | Yes      |                 | Illustration source path       |
| caption     | string | "My caption"           | No       |                 | Illustration short description |

**Audio Item**

Supported audio formats: mp3, ogg, wav.

| Property    | Type   | Example               | Required | Default         | Purpose                       |
| ----------- | ------ | --------------------- |:--------:| --------------- | ----------------------------- |
| type        | string | "audio"               | Yes      |                 | Item type                     |
| position    | object | See `Position` object | No       | {left:0, top:0} | Hotspot position on the scene |
| path        | string | "/path/to/sound.mp3"  | Yes      |                 | Sound source path             |
| caption     | string | "My caption"          | No       |                 | Sound short description       |

**Video Item**

Supported video formats: mp4, webm.

| Property    | Type   | Example               | Required | Default         | Purpose                                             |
| ----------- | ------ | --------------------- |:--------:| --------------- | --------------------------------------------------- |
| type        | string | "video"               | Yes      |                 | Item type                                           |
| position    | object | See `Position` object | No       | {left:0, top:0} | Hotspot position on the scene                       |
| path        | string | "/path/to/video.mp4"  | Yes      |                 | Video source path                                   |
| caption     | string | "My caption"          | No       |                 | Video short description                             |
| poster      | string | "path/to/poster.png"  | No       |                 | An image to be shown while the video is downloading |

**Provider Item**

Supported providers: Youtube, Dailymotion.

| Property     | Type   | Example                 | Required | Default         | Purpose                       |
| ------------ | ------ | ----------------------- |:--------:| --------------- | ----------------------------- |
| type         | string | "provider"              | Yes      |                 | Item type                     |
| position     | object | See `Position` object   | No       | {left:0, top:0} | Hotspot position on the scene |
| providerName | string | "youtube\|dailymotion"  | Yes      |                 | Content provider name         |
| parameters   | object | See `Parameters` object | Yes      |                 | Content parameters            |

### Other objects

**Position**

| Property    | Type    | Example | Required | Default | Purpose          |
| ----------- | ------- | ------- |:--------:| ------- | ---------------- |
| left        | integer | 200     | Yes      |         | X absolute value |
| top         | integer | 50      | Yes      |         | Y absolute value |

**Link**

| Property    | Type    | Example                  | Required | Default     | Purpose             |
| ----------- | ------- | ------------------------ |:--------:| ----------- | ------------------- |
| url         | string  | "https://www.github.com" | Yes      |             | href attribute      |
| label       | string  | "My webpage"             | No       | `url` value | Name of the webpage |

**Parameters**

| Property | Type    | Example       | Required | Default | Purpose          |
| -------- | ------- | ------------- |:--------:| ------- | ---------------- |
| videoId  | string  | "xxxYYY123"   | Yes      |         | Video identifier |

Please note that only [Youtube](https://www.youtube.com/) and [Dailymotion](https://www.dailymotion.com/) videos are supported.

## Tests

All builds are unit tested with [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/).
Check it out on [Travis CI](https://travis-ci.org/jpchateau/Interactive-Image)!

### Run all unit tests
```sh
$ npm run test
```

### Run all unit tests and display code coverage
```sh
$ npm run test-with-coverage
```

## Requirements

[jQuery](https://jquery.com/download/) 1.7.2+ is required.

## Dependencies

* [imagesloaded](https://www.npmjs.com/package/imagesloaded) to detect when images have been loaded

## Browser Support

| ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) |
| --- | --- | --- | --- | --- |
| Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

## Contribute

Feel free to contribute and open some issues or pull requests.  
This jQuery plugin uses [npm](https://www.npmjs.com/) to manage dependencies and [webpack](https://webpack.js.org/) as bundler.  
See the complete contributing guidelines [here](CONTRIBUTING.md).

## Philosophy

This tool is not just a means to create rich media contents. It focuses on code quality and cares about web performances.  
A good code base, following the language good pratices, reduces maintainability issues and could be used as example. 

## Alternatives

* For business:
  * [genially](https://www.genial.ly/)
  * [ImageMarker](https://www.imagemarker.com/)
  * [ThingLink](https://www.thinglink.com/)
* Premium:
  * [imageLinks](http://avirtum.com/imagelinks-jquery-plugin/)
* Free:
  * [jquery.hotspot.js](https://github.com/skypluto/jquery.hotspot.js)

## License

Copyright (c) 2015-2019 Jean-Philippe Chateau.  
This content is released under [the MIT license](https://github.com/jpchateau/Interactive-Image/blob/master/LICENSE).
