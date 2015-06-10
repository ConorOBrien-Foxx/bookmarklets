var app = document.createElement("div");
app.innerHTML = "Testing";
app.style = "top: 10px; right: 10px; opacity: 0.1; background: red; width: 350px; position: fixed;";

document.body.appendChild(app);

/*
javascript:(function(){
  _my_script=document.createElement('SCRIPT');
  _my_script.type='text/javascript';
  _my_script.src='http://mysite.com/script.js?';
  document.getElementsByTagName('head')[0].appendChild(_my_script);
})();

*/
