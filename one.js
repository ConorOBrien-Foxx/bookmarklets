var app        = document.createElement("div");
app.innerHTML  = "Testing";
app.id         = "ConorOBrienFoxxApp";
var _my_style  = document.createElement("link");
_my_style.rel  = "STYLESHEET";
_my_style.href = "https://raw.githubusercontent.com/ConorOBrien-Foxx/bookmarklets/gh-pages/one.css";
document.getElementsByTagName('head')[0].appendChild(_my_style);
document.body.appendChild(app);

/*
javascript:(function(){
  _my_script=document.createElement('SCRIPT');
  _my_script.type='text/javascript';
  _my_script.src='https://raw.githubusercontent.com/ConorOBrien-Foxx/bookmarklets/gh-pages/one.js';
  document.getElementsByTagName('head')[0].appendChild(_my_script);
})();

*/
