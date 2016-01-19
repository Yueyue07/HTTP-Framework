# Explore http-framework
 REST APIs using the node HTTP module

## Installation

 ```bash
 $ npm install explore-401
 ```

## Usage

Here is the example of url post

```js
var app = require('explore-401')

app.router.post('/post', app.postRequest);

app.server(app.router.route()).listen(4000, () => {
  console.log('server up');
});
```
Here you can use superagent localhost:4000/post post '{"hello":"world"}' and post any json data type you want

Here is the example of url get

```js
var app = require('explore-401')

app.router.get('/get', app.res.buildResponse({note:'hello'}));

app.server(app.router.route()).listen(4000, () => {
  console.log('server up');
});
```
In `app.res.buildResponse()`, you could pass string, object and html into `app.res.buildResponse()`.

## Build Response
The buildResponse function simplifies the response object from the server and detects the content type of the data passed in.

## POST Request
Handles the post request using superagent-cli.

## Dependencies
-mocha
-gulp-mocha
-chai
-chai-http
-superagent-cli
-eslint
-gulp-eslint

## License
The MIT License (MIT)

Copyright (c) 2016 Stephen Salzer, Darcy Lambretch, Yueyue Qin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
