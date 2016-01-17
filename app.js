const app = require('./lib/server');

//response as string 'hello' in app.res.content
app.router.get('/welcome/1', app.res.content('hello'));

//response as json format and input object {note:'hello'} in app.res.content
app.router.get('/',app.res.content({note:'hello'}));

app.server(app.router.route()).listen(4000, () => {
  console.log('server up');
});
