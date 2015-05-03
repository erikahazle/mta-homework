// var initialLine = prompt("Please enter the line you will get on ('N', 'L', '6')");
// var initialStop = prompt("Please enter the name of your initial stop");
// var lastStop = prompt("Please enter the line you will get off on ('N', 'L', '6')");
// var lastStop = prompt("Please enter your last stop");

function Line(stopsList) {
  this.stopsList = stopsList;
}

var lineN = new Line(['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']);


var stopsNum = function() {
  var index1 = indexOf(initialNum);
  var index2 = indexOf(lastNum);
  
  console.log(index2 - index1);
}

stopsNum();