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
