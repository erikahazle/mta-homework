var firstStopQ = function(message) {
  prompt("Please enter your first stop: " + message);
};

var lastStopQ = function(message) {
  prompt("Please enter your last stop: " + message);
};

var finalNum = function(totalStops, initialStop, lastStop) {
  console.log("There are " + totalStops + " stops between " + initialStop + " and " + lastStop);
};

var index = function(line, stop) {
  switch(line) {
  case 'N':
    return Lines.lineN.indexOf(stop);
    break;
  case 'L':
    return ines.lineL.indexOf(stop);
    break;
  case '6':
    return Lines.line6.indexOf(stop);
    break;
}

var initialLine = prompt("Please enter the line you will get on ('N', 'L', '6')");

if(initialLine === 'N') {
  var initialStop = firstStopQ("'Times Square', '34th', '28th', '23rd', 'Union Square', '8th'");
} else if (initialLine === 'L') {
  var initialStop = firstStopQ("'8th', '6th', 'Union Square', '3rd', '1st'");
} else if (initialLine === '6'){
  var initialStop = firstStopQ("'Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'");
} else {
  console.log('Unfortunately, this line does not exist...');
}

var lastLine = prompt("Please enter the line you will take ('N', 'L', '6')");

if(initialLine === 'N') {
  var lastStop = lastStopQ("'Times Square', '34th', '28th', '23rd', 'Union Square', '8th'");
} else if (initialLine === 'L') {
  var lastStop = lastStopQ("'8th', '6th', 'Union Square', '3rd', '1st'");
} else if (initialLine === '6') {
  var lastStop = lastStopQ("'Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'");
}

var Lines = {
  lineN: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  lineL: ['8th', '6th', 'Union Square', '3rd', '1st'],
  line6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
};

// Function for finding an index



if (initialLine === lastLine) {
  
  var index2 = Lines.lineN.indexOf(lastStop);

  var totalStops;
  if (index1 > index2) {
    totalStops = index1 - index2;
  } else {
    totalStops = index2 - index1;
  }
  finalNum(totalStops, initialStop, lastStop);
} 
  else {
  // calculate how far it is from initialStop to Union Sq on the initial line


  // calculate how far it is from Union Sq to lastStop on the last line
  finalNum(totalStops, initialStop, lastStop);
  }

