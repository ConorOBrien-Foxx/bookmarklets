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

var html = `<div id="ConorOBrienFoxxDate" style="z-index:10000000;position:fixed;width:312.65px;top:10px;right:10px;background:#ccc;border-radius:5px;padding:5px;font-family:Candara,Consolas,monospace!important;">
		<div style="font-family:Consolas;text-align:center;margin-top:-5px;margin-left:-5px;border-radius:5px 5px 0 0;width: calc(10px + 100%);background: black; height: 1.2em;color: white !important;" id="headerCOBFD">
			<a target="_blank" style="color:blue!important;text-decoration:overline;" href="https://github.com/ConorOBrien-Foxx">ConorOBrien-Foxx</a> DateCalc
			<button style="border-radius: 0 5px 0 0;cursor:pointer;float:right;border:none;background:rgb(200,20,20);color:black;font-family:Consolas;" onmouseover="this.style.background='rgb(250,20,20)'"onmouseout="this.style.background='rgb(200,20,20)'" onclick="document.getElementById('ConorOBrienFoxxDate').outerHTML=''">X</button>
		</div>
		<div id="contentCOBFD">
		What was <input id="valueCOBFD" value=6 style="width:10ch;"> <select id="unitCOBFD">
			<option value="1day" default>days</option>
			<option value="7week">weeks</option>
			<option value="months" disabled>months</option>
			<option value="years" disabled>years</option>
		</select> ago? <button onclick="process();" style="cursor:pointer;">Go!</button><br><div id="outputCOBFD" style="cursor:text;width:100%;min-height:1.2em;background:#fff;font-family:Consolas;"></div></div>
	</div>`
document.body.innerHTML += html;
`
