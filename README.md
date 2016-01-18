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

app.router.post('/', app.postRequest);

app.server(app.router.route()).listen(4000, () => {
  console.log('server up');
});
```
app.router.post: is our post action in REST; the parameter pass the url you want to go to.
app.server: is to build your server and make it listen to PORT 4000; app.router.route()is our callback function in app.server.


## Build Response
The buildResponse function simplifies the response object from the server and detects the content type of the data passed in.

## POST Request
Handles the post request using superagent-cli.

## Dependencies
mocha
gulp-mocha
chai
chai-http
superagent-cli
eslint
gulp-eslint
