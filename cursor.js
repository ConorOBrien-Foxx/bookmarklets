(function(){
Foxx={};
Foxx.popup={};
Foxx.popup.style ="\"width:300px;height:3em;color:white;background:rgb(0,50,250);position:fixed;top:10px;left:50%;margin-left:-150px;z-index:100000000000000000000000;opacity:0.2;transition:all .2s;\"";
Foxx.popup.onmouseover="\"this.style.opacity=1\"";
Foxx.popup.onmouseout="\"this.style.opacity=0.2\"";
Foxx.popup.i2 = ""; // wip
Foxx.popup.i = "<img onclick="+Foxx.popup.i2+"src=\"https://cloud.githubusercontent.com/assets/12823013/8146717/fe213118-1216-11e5-8eb7-6f5f8914b0f5.png\">"
Foxx.el = "<div id=ConorOBrienFoxxCursorBox onmouseover="+Foxx.popup.onmouseover+" onmouseout="+Foxx.popup.onmouseout+" style="+Foxx.popup.style+">"+Foxx.popup.i+"</div>";
Foxx.body = document.body;
Foxx.body.innerHTML += Foxx.el;
})();
void(0);
