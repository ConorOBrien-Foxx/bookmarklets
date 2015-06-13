# bookmarklets
A collection of bookmarks I've made.

<a href='javascript:try{document.getElementsByTagName("title")[0].innerHTML=prompt("new title")||"empty"}catch(e){};void(0);'>Change Title</a>

<a href="javascript:(function(){
  _my_script=document.createElement('SCRIPT');
  _my_script.type='text/javascript';
  _my_script.src='https://raw.githubusercontent.com/ConorOBrien-Foxx/bookmarklets/gh-pages/popup.js';
  document.getElementsByTagName('head')[0].appendChild(_my_script);
})();">Popup</a>
