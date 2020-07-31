# Change Log
This project adheres to [Semantic Versioning](http://semver.org/).

## 2.7.1 (2020-07-31)
* Fixed an issue when share box is hidden - issue [#8](https://github.com/jpchateau/Interactive-Image/issues/8)

## 2.7.0 (2020-07-24)
* Added support of SoundCloud tracks
* Fixed an outline focus css issue on video/audio tags appeared on latest Google Chrome versions
* Package size has been reduced to the minimum by removing unnecessary files
* Codebase improvements regarding loading of iframe elements and ES2020
* Code coverage augmented

## 2.6.1 (2020-06-17)
* Fixed a problem of npm package size

## 2.6.0 (2020-06-17)
* Added support of Vimeo videos
* Mouse click event available to trigger the display of items
* Possibility to destroy an instance of the plugin and recreate it
* Possibility to translate a message related to unsupported screen sizes using CSS
* Console logs improved for debugging purposes
* Some jQuery code replaced by equivalent in vanilla JavaScript
* Code coverage augmented
* Codebase improvements

## 2.5.0 (2019-09-26)
* Support for HTML markup into items descriptions
* Better user experience about the way items are displayed and hidden
* Videos and sounds that are playing are now stopped when the mouse leaves the scene
* Added a customClassName property on items for better style customization
* Codebase improvements and unit tests
* Fixed an issue related to links labels on Text items
* Fixed an issue related to items width

## 2.4.0 (2019-06-17)
* Sticky behavior available on items
* Added a social share box to enable content sharing on Facebook, Twitter and by email
* Description texts are now displayed after each media for a better flow - issue [#3](https://github.com/jpchateau/Interactive-Image/issues/3)
* Codebase improvements and unit tests
* Added an editorconfig file to ease contributing
* Fixed an issue affecting the link over a picture that was not clickable on the caption part, on Picture items
* Fixed an issue regarding the poster size of HTML video elements

## 2.3.0 (2019-04-05)
* Added support of poster attribute for HTML5 video items
* Added support of Dailymotion videos
* Codebase improvements

## 2.2.0 (2019-03-06)
* Added Sound items
* Added Video items
* Added support for content providers (Youtube)
* Introduce a breakpoint for unsupported screens (<=320px))
* Unit tests on DOM elements and better code coverage
* Autoprefixer dev dependency removed as it was not working as expected

## 2.1.0 (2019-02-15)
* Better rendering
* Unit tests and code coverage metrics
* Uniqid dependency removed
* Performance metrics available in debug mode
* Local server available for development

## 2.0.0 (2018-05-10)
* Added Picture items
* Improved overall rendering
* All images tags now have an alt attribute
* The possibility to customize items styles in JS has been removed
* Upgraded to Webpack 4
* Now uses Sass as CSS preprocessor

## 1.0.0 (2018-04-05)
* First stable release
