(function(){
Foxx={};
Foxx.popup={};
Foxx.style = document.createElement("style");
Foxx.popup.style ="\"width:300px;height:50px;color:white;background:rgb(0,50,250);position:fixed;top:10px;left:50%;margin-left:-150px;z-index:100000000000000000000000;opacity:0.2;transition:all .2s;\"";
Foxx.popup.onmouseover="\"this.style.opacity=1\"";
Foxx.popup.onmouseout="\"this.style.opacity=0.2\"";
Foxx.func1 = function(a){Foxx.style.innerHTML="*{cursor:url("+a+"),default;}";
document.getElementsByTagName("head")[0].appendChild(Foxx.style);
document.getElementById("ConorOBrienFoxxCursorBox").outerHTML="";}
Foxx.popup.i = "<img src=\"https://cloud.githubusercontent.com/assets/12823013/8146717/fe213118-1216-11e5-8eb7-6f5f8914b0f5.png\" onclick=\""+"Foxx.func1(\"https://cloud.githubusercontent.com/assets/12823013/8146717/fe213118-1216-11e5-8eb7-6f5f8914b0f5.png\");"+"\" >"
Foxx.el = "<div id=ConorOBrienFoxxCursorBox onmouseover="+Foxx.popup.onmouseover+" onmouseout="+Foxx.popup.onmouseout+" style="+Foxx.popup.style+">"+Foxx.popup.i+"</div>";
document.body.innerHTML += Foxx.el;
})();
void(0);

