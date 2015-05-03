// var initialLine = prompt("Please enter the line you will get on ('N', 'L', '6')");
// var initialStop = prompt("Please enter the name of your initial stop");
// var lastStop = prompt("Please enter the line you will get off on ('N', 'L', '6')");
// var lastStop = prompt("Please enter your last stop");

function Line(stopsList) {
  this.stopsList = stopsList;
}

var lineN = new Line(['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']);

var initialStop = '8th'; lastStop = '34th';


var index1 = lineN.stopsList.indexOf(initialStop);
var index2 = lineN.stopsList.indexOf(lastStop);

var totalStops;
if (index1 > index2) {
  totalStops = index1 - index2;
} else {
  totalStops = index2 - index1;
}


console.log("There are " + totalStops + " stops between " + initialStop + " and " + lastStop);
