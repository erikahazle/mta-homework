
/***********************
LINES OBJECT
***********************/

var Lines = {
  lineN: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  lineL: ['8th', '6th', 'Union Square', '3rd', '1st'],
  line6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
};

/***********************
FUNCTIONS
***********************/

var firstStopQ = function(message) {
  var initialStop = prompt("Please enter your first stop: " + message);
  return initialStop;
};

var lastStopQ = function(message) {
  var lastStop = prompt("Please enter your last stop: " + message);
  return lastStop;
};

var finalNum = function(totalStops, initialStop, lastStop) {
  console.log("There are " + totalStops + " stops between " + initialStop + " and " + lastStop);
};

var index = function(line, stop) {
  if(line === 'N'){
    return Lines.lineN.indexOf(stop);
  } else if (line === 'L') {
    return Lines.lineL.indexOf(stop);
  } else if (line === '6')
    return Lines.line6.indexOf(stop);
  };

var calcStops = function(index1, index2) {
  if (index1 > index2) {
    totalStops = index1 - index2;
    return totalStops;
  } else {
    totalStops = index2 - index1;
    return totalStops;
  }
};

/***********************
USER INPUT
***********************/

var initialLine = prompt("Please enter the line you will get on ('N', 'L', '6')");


if(initialLine === 'N') {
  var initialStop = firstStopQ("'Times Square', '34th', '28th', '23rd', 'Union Square', '8th'");
} else if (initialLine === 'L') {
  var initialStop = firstStopQ("'8th', '6th', 'Union Square', '3rd', '1st'");
} else if (initialLine === '6'){
  var initialStop = firstStopQ("'Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'");
} else {
  alert("Unfortunately, this line does not exist... Press 'OK' to start again");
  initialLine = prompt("Please enter the line you will get on at ('N', 'L', '6')");
}

var lastLine = prompt("Please enter the line you will take ('N', 'L', '6')");

if(lastLine === 'N') {
  var lastStop = lastStopQ("'Times Square', '34th', '28th', '23rd', 'Union Square', '8th'");
} else if (lastLine === 'L') {
  var lastStop = lastStopQ("'8th', '6th', 'Union Square', '3rd', '1st'");
} else if (lastLine === '6') {
  var lastStop = lastStopQ("'Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'");
} else {
  alert("Unfortunately, this line does not exist... Press 'OK' to start again");
  lastLine = prompt("Please enter the line you will get off at ('N', 'L', '6')");
}

/**********************************
CALCULATING THE NUMBER OF STOPS
***********************************/
var index1 = index(initialLine, initialStop);
var index2 = index(lastLine, lastStop);
var unionSq1 = index(initialLine, 'Union Square');
var unionSq2 = index(lastLine, 'Union Square');



if (initialLine === lastLine) {
  totalStops = calcStops(index1, index2);
} else {
  totalStops = calcStops(index1, unionSq1) + calcStops(index2, unionSq2);
}


finalNum(totalStops, initialStop, lastStop);













