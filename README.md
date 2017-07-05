 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
 [![Build Status](https://travis-ci.org/Seunadex/Headlines.svg?branch=master)](https://travis-ci.org/Seunadex/Headlines)
 [![Code Climate](https://codeclimate.com/github/Seunadex/Headlines/badges/gpa.svg)](https://codeclimate.com/github/Seunadex/Headlines)
[![Coverage Status](https://coveralls.io/repos/github/Seunadex/Headlines/badge.svg)](https://coveralls.io/github/Seunadex/Headlines)

# Headlines
* A front-end application built with react using flux architecture, express and compiled with babel, that takes advantage of the functionalities NewsAPI provides, by providing real-time news from over 70 different sources.

## Features
* Login with Google.
* Allow users to search through a list of news sources.
* Allow users to select sources and view headlines based on sources.
* Allow users to sort news articles based on the sorting options provided by the Api(Top and Latest).
* Allow user to read the news article in a new tab.
* User can share news articles on social media(facebook, twitter, linkedIn, and googleplus).

## Dependencies
* **[React(flux architecture)](https://facebook.github.io/react/)** - React architecture used in the app framework design.
* **[Webpack](https://webpack.github.io/)** - webpack is a module bundler for modern JavaScript applications.
* **[Express](https://expressjs.com/)** - It is used in serving the app.
* **[Babel](https://babeljs.io/)** - It is used in transpiling es6 code to browser compactible code.
* **[Axios](https://github.com/mzabriskie/axios)** - Promised based HTTP for browser and node.js.
* **[Jest](https://facebook.github.io/jest/)** - Used in testing all javascript code.

## Installation and setup
* Clone the repository using your favorite terminal with the command `git clone https://github.com/Seunadex/Headlines.git`
* Navigate into the directory and run `$ cd headlines`
* Install all dependencies by running `$ npm install`
* Goto **[google developer](console.developer.google.com)** site, register/create your app and obtain your client ID.
* Replace `Your_client_id` with your client ID inside the `.example.env` file.
* Remove `.example` from the filename and save.
* Start the app by running `$ npm start`

## Tests
* All test were written with jest and enzyme as a test utility.
* Navigate to the root directory and run `npm test`.

## Limitations
* User can only login with google,
* User can not view article in-app,
* User can not save favorite news.

## FAQ
* Can I contribute?
  * Absolutely yes, check `How to contribute` below.

## How to contribute
* Fork the repo.
* Open a new branch for the feature to add.
* Follow the correct style guide **[Airbnb](https://github.com/airbnb/javascript/tree/master/react)** for consistency.
* Use the `eslint configuration` in this app.
* Create a pull request.
  * Write a short description of what the PR does.
  * Write areas of the app that is affected by the PR.
  * Provide a screenshot (if applicable).
  * Write how to manually test the feature.

## License
(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Author
 Seun Adekunle -@seunadex

