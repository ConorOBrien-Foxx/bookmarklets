Date.prototype.print = function(n = 0) {
  var o = [];
  if(n >= -1) o.push(this.getMonth() + 1);
  if(n >= 0) o.push(this.getDate());
  if(n >= -2) o.push((1900 + this.getYear()) < 0 ? -(1900 + this.getYear()) + " BC" : 1900 + this.getYear());
  if(n >= 1) o.push(this.getHours());
  if(n >= 2) o.push(this.getMinutes());
  if(n >= 3) o.push(this.getSeconds());
  return o.join("/");
}

function dvminus(d, v /*in days*/ ) {
  var dp = new Date(d);
  return new Date(dp.setDate(dp.getDate() - v));
}

function process() {
  val = document.getElementById("valueCOBFD");
  mul = document.getElementById("unitCOBFD");
  out = document.getElementById("outputCOBFD");
  o = "resulting date: " + dvminus(new Date(), val.value * (parseInt(mul.value))).print();
  if(o.search("NaN") + 1) {
    x = "i dunno what went wrong...";
    if(isNaN(+val.value)) x = "&ldquo;" + val.value.trim() + "&rdquo;";
    out.innerHTML = "error: bad input (" + x + ")";
  } else {
    out.innerHTML = o;
  }
}

var __html = "<iframe src=\"javascript:'"+atob("PGRpdiBpZD0iQ29ub3JPQnJpZW5Gb3h4RGF0ZSIgc3R5bGU9InotaW5kZXg6MTAwMDAwMDA7cG9zaXRpb246Zml4ZWQ7d2lkdGg6MzEyLjY1cHg7dG9wOjEwcHg7cmlnaHQ6MTBweDtiYWNrZ3JvdW5kOiNjY2M7Ym9yZGVyLXJhZGl1czo1cHg7cGFkZGluZzo1cHg7Zm9udC1mYW1pbHk6Q2FuZGFyYSxDb25zb2xhcyxtb25vc3BhY2UhaW1wb3J0YW50OyI+CgkJPGRpdiBzdHlsZT0iZm9udC1mYW1pbHk6Q29uc29sYXM7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLXRvcDotNXB4O21hcmdpbi1sZWZ0Oi01cHg7Ym9yZGVyLXJhZGl1czo1cHggNXB4IDAgMDt3aWR0aDogY2FsYygxMHB4ICsgMTAwJSk7YmFja2dyb3VuZDogYmxhY2s7IGhlaWdodDogMS4yZW07Y29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7IiBpZD0iaGVhZGVyQ09CRkQiPgoJCQk8YSB0YXJnZXQ9Il9ibGFuayIgc3R5bGU9ImNvbG9yOmJsdWUhaW1wb3J0YW50O3RleHQtZGVjb3JhdGlvbjpvdmVybGluZTsiIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9Db25vck9Ccmllbi1Gb3h4Ij5Db25vck9Ccmllbi1Gb3h4PC9hPiBEYXRlQ2FsYwoJCQk8YnV0dG9uIHN0eWxlPSJib3JkZXItcmFkaXVzOiAwIDVweCAwIDA7Y3Vyc29yOnBvaW50ZXI7ZmxvYXQ6cmlnaHQ7Ym9yZGVyOm5vbmU7YmFja2dyb3VuZDpyZ2IoMjAwLDIwLDIwKTtjb2xvcjpibGFjaztmb250LWZhbWlseTpDb25zb2xhczsiIG9ubW91c2VvdmVyPSJ0aGlzLnN0eWxlLmJhY2tncm91bmQ9J3JnYigyNTAsMjAsMjApJyJvbm1vdXNlb3V0PSJ0aGlzLnN0eWxlLmJhY2tncm91bmQ9J3JnYigyMDAsMjAsMjApJyIgb25jbGljaz0iZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0Nvbm9yT0JyaWVuRm94eERhdGUnKS5vdXRlckhUTUw9JyciPlg8L2J1dHRvbj4KCQk8L2Rpdj4KCQk8ZGl2IGlkPSJjb250ZW50Q09CRkQiPgoJCVdoYXQgd2FzIDxpbnB1dCBpZD0idmFsdWVDT0JGRCIgdmFsdWU9NiBzdHlsZT0id2lkdGg6MTBjaDsiPiA8c2VsZWN0IGlkPSJ1bml0Q09CRkQiPgoJCQk8b3B0aW9uIHZhbHVlPSIxZGF5IiBkZWZhdWx0PmRheXM8L29wdGlvbj4KCQkJPG9wdGlvbiB2YWx1ZT0iN3dlZWsiPndlZWtzPC9vcHRpb24+CgkJCTxvcHRpb24gdmFsdWU9Im1vbnRocyIgZGlzYWJsZWQ+bW9udGhzPC9vcHRpb24+CgkJCTxvcHRpb24gdmFsdWU9InllYXJzIiBkaXNhYmxlZD55ZWFyczwvb3B0aW9uPgoJCTwvc2VsZWN0PiBhZ28/IDxidXR0b24gb25jbGljaz0icHJvY2VzcygpOyIgc3R5bGU9ImN1cnNvcjpwb2ludGVyOyI+R28hPC9idXR0b24+PGJyPjxkaXYgaWQ9Im91dHB1dENPQkZEIiBzdHlsZT0iY3Vyc29yOnRleHQ7d2lkdGg6MTAwJTttaW4taGVpZ2h0OjEuMmVtO2JhY2tncm91bmQ6I2ZmZjtmb250LWZhbWlseTpDb25zb2xhczsiPjwvZGl2PjwvZGl2PgoJPC9kaXY+")+"'\"></iframe>";
document.body.innerHTML += __html;
/*
<a href="javascript:(function(){
  _my_script=document.createElement('SCRIPT');
  _my_script.type='text/javascript';
  _my_script.src='https://raw.githubusercontent.com/ConorOBrien-Foxx/bookmarklets/gh-pages/timecalc.js';
  document.getElementsByTagName('head')[0].appendChild(_my_script);
})();void(0);">Date Calculator &ndash; COBFoxx</a>
*/
void(0);
