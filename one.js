var app         = document.createElement("div");
app.innerHTML   = "Testing";
app.id          = "ConorOBrienFoxxApp";
app.style       = "top: 10px; right: 10px; position: fixed; z-index: 1000;background: red;color:white;";
app.onmouseover = "this.style.opacity = 1;";
app.onmouseout  = "this.style.opacity = 0.5;"
document.body.appendChild(app);

/*
javascript:(function(){
  _my_script=document.createElement('SCRIPT');
  _my_script.type='text/javascript';
  _my_script.src='https://raw.githubusercontent.com/ConorOBrien-Foxx/bookmarklets/gh-pages/one.js';
  document.getElementsByTagName('head')[0].appendChild(_my_script);
})();

<!DOCTYPE html>
<html>

<body>
<a href="javascript:(function(){
  _my_script=document.createElement('SCRIPT');
  _my_script.type='text/javascript';
  _my_script.src='https://raw.githubusercontent.com/ConorOBrien-Foxx/bookmarklets/gh-pages/one.js';
  document.getElementsByTagName('head')[0].appendChild(_my_script);
var _my_style  = document.createElement('link');
_my_style.rel  = 'STYLESHEET';
_my_style.type = 'text/css';
_my_style.href = 'https://raw.githubusercontent.com/ConorOBrien-Foxx/bookmarklets/gh-pages/one.css';
document.getElementsByTagName('head')[0].appendChild(_my_style);
})()">bookmarklet</a>
</body>

</html>
*/
