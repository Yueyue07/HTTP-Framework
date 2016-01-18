//const app = require('./lib/server'); // origin file
const app = require('explore-401');

//response as string 'hello' in app.res.content
app.router.post('/hello', app.postRequest);

//response as json format and input object {note:'hello'} in app.res.content
app.router.get('/',app.res.buildResponse({note:'hello'}));

app.server(app.router.route()).listen(4000, () => {
  console.log('server up');
});
