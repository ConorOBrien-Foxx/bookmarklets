var app = document.createElement("div");
app.innerHTML = "Testing";
app.style = "top: 10px; right: 10px; opacity: 0.1; background: red; width: 350px; position: fixed;";
document.body.appendChild(app);
app.addEventListener("mouseover",function(){
  this.style.opacity = "1";
});
app.addEventListener("mouseout",function(){
  this.style.opacity = "0.1";
});

/*
javascript:(function(){
  _my_script=document.createElement('SCRIPT');
  _my_script.type='text/javascript';
  _my_script.src='https://raw.githubusercontent.com/ConorOBrien-Foxx/bookmarklets/gh-pages/one.js';
  document.getElementsByTagName('head')[0].appendChild(_my_script);
})();

*/
