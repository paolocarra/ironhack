// Rover Object Goes Here


var rover = {
  direction : "N",
  position : [0,0],
  travelLog : [],
};

console.log(rover);


var matrix = [];
for(var i=0; i<10; i++) {
    matrix[i] = new Array(10);
}

console.log(matrix);


function turnLeft(){
  console.log("turnLeft was called!");
  switch (rover.direction){
    case "N" :
    rover.direction = "W";
    break;
    case "W" :
    rover.direction = "S";
    break;
    case "S" :
    rover.direction = "E";
    break;
    case "E" :
    rover.direction ="N";
    break;
  }
  
  console.log(rover)
}

function turnRight(){
  console.log("turnRight was called!");
  switch (rover.direction){
    case "N" :
    rover.direction = "E";
    break;
    case "E" :
    rover.direction = "S";
    break;
    case "S" :
    rover.direction = "W";
    break;
    case "W" :
    rover.direction = "N"
  }
  
  console.log(rover);
}


function moveForward() {
	console.log('moveForward was called');
	switch (rover.direction) {
    case 'N':

      var temp = [rover.position [0] - 1, rover.position [1]];
      rover.travelLog.push(temp);
			rover.position[0] = rover.position[0] - 1;
			break;

    case 'E':
      var temp = [rover.position [0], rover.position [1] + 1];
      rover.travelLog.push(temp);
			rover.position[1] = rover.position[1] + 1;
			break;

    case 'S':
      var temp = [rover.position [0]+ 1, rover.position [1]];
      rover.travelLog.push(temp);
			rover.position[0] = rover.position[0] + 1;
			break;

    case 'W':
      var tempm = [rover.position [0], rover.position [1]- 1];
      rover.travelLog.push(temp);
			rover.position[1] = rover.position[1] - 1;
			break;
  }
  
}




// function command

function commands (string) {
for (i=0; i<string.length; i++){
  switch (string[i]) { 
  case "r" :
  turnRight();
  break;
  case "l"  :
  turnLeft();
  break;
  case "f" :
  moveForward();
  break;
  }
}
  
  console.log(rover.travelLog);
  console.log(rover);
}

commands("rffrfflfrff");