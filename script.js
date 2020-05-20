/* WORKS CITED
 *
 * Export to PDF:
 *  - https://stackoverflow.com/a/23684363
 *  - https://stackoverflow.com/a/36509632
 *  - https://stackoverflow.com/a/19290964
 *
 * EaselJS (HTML Canvas Plugin by CreateJS):
 *  - https://www.createjs.com/easeljs
 *  - https://stackoverflow.com/a/26217036
 *  - https://stackoverflow.com/a/19877741
 */


//DEFAULT VARIABLES
const primary = 'black';
const secondary = 'white';
const thickness = [7, 4, 3, 2];
const rulerW = [0, 100, 300, 700, 850];
const rulerH = [0, 250, 1100];
const rulerX = [0, 75, 375, 475, 775, 850];
const rulerY = [0, 250, 500, 750, 1000, 1100];

var canvas = document.getElementById('canvas');
var stage = new createjs.Stage("canvas");


//EXPORT TO PDF FUNCTION
function exportCanvas() {
  var imgData = canvas.toDataURL("image/jpeg", 1.0);
  var pdf = new jsPDF('p', 'px', 'letter');
  pdf.addImage(imgData, 'JPEG', 0, 0);
  pdf.save("download.pdf");
}


//INITIALIZATION FUNCTION (MAIN METHOD)
function init() {
  outside();
  room1();
  room2();
  room3();
  room4();
  basement();
  house();
  stage.update();
}


//DRAW ELEMENTS OUTSIDE HOUSE
function outside() {
    
  //Background
  var back = new createjs.Shape();
  back.graphics.beginFill(secondary).drawRect(rulerX[0], rulerY[0], rulerW[4], rulerH[2]);
  stage.addChild(back);
  
  //Ground
  var ground = new createjs.Shape();
  ground.graphics.beginFill(primary).drawRect(rulerX[0], rulerY[3], rulerW[4], rulerH[2]);
  stage.addChild(ground);
  
  //Basement
  var basement = new createjs.Shape();
  basement.graphics.beginStroke(primary).setStrokeStyle(thickness[0]).beginFill(secondary).drawRect(rulerX[1], rulerY[3], rulerW[3], rulerH[1]);
  stage.addChild(basement);
  
  //Text  
  var text = new createjs.Text("HOUSE OF ZOOM", "48px Arial", primary);
  text.x = (rulerW[4] / 2) - (text.getBounds().width / 2); 
  text.y = rulerY[1] - 45;
  text.textBaseline = "alphabetic";
  stage.addChild(text);
  
  var text = new createjs.Text("THE", "60px Arial", primary);
  text.x = (rulerW[4] / 2) - (text.getBounds().width / 2); 
  text.y = rulerY[1] - 105;
  text.textBaseline = "alphabetic";
  stage.addChild(text);
}


//DRAW HOUSE ELEMENTS
function house() {
    
  //Four (4) Main Rooms
  for(var i = 0; i < 4; i++) {
    var room = new createjs.Shape();
    room.graphics.beginStroke(primary).setStrokeStyle(thickness[0]).drawRect(rulerX[1], rulerY[1], rulerW[2], rulerH[1]);
    if(i % 2 == 1) room.y += rulerH[1];
    if(i > 1) room.x += 400;
    stage.addChild(room);
  }
  
  //Four (4) Windows
  for(var i = 0; i < 4; i++) {
    var glass = new createjs.Shape();
    glass.graphics.beginStroke(primary).setStrokeStyle(thickness[3]).drawRect(rulerX[1] + (rulerW[2] / 2) - 45, rulerY[1] + (rulerH[1] / 2) - 80, 70, 70);
    if(i % 2 == 1) glass.y += rulerH[1];
    if(i > 1) glass.x += 420;
    stage.addChild(glass);
  }
  
  //Two (2) Hallways
  for(var i = 0; i < 2; i++) {
    var hall = new createjs.Shape();
    hall.graphics.beginStroke(primary).setStrokeStyle(thickness[0]).drawRect(rulerX[2], rulerY[1], rulerW[1], rulerH[1]);
    if(i % 2 == 1) hall.y += rulerH[1];
    stage.addChild(hall);
  }
  
  //Basement
  var basement = new createjs.Shape();
  basement.graphics.beginStroke(primary).setStrokeStyle(thickness[0]).drawRect(rulerX[1], rulerY[3], rulerW[3], rulerH[1]);
  stage.addChild(basement);
  
  //Stairs
  var stairsA = new createjs.Shape();
  stairsA.graphics.beginStroke(primary).setStrokeStyle(thickness[0]).beginFill(secondary).drawRect(rulerX[3] - (rulerW[1] / 2), rulerY[3] - (rulerH[1] * 1.5), (rulerW[1] / 2), (rulerH[1] * 1.5));
  stage.addChild(stairsA);
  
  var stairsB = new createjs.Shape();
  stairsB.graphics.beginStroke(primary).setStrokeStyle(thickness[0]).beginFill(secondary).drawRect(rulerX[1], rulerY[4] - (rulerH[1] * 1.5), (rulerW[1] / 2), (rulerH[1] * 1.5));
  stage.addChild(stairsB);
  
  //Roof
  var roof = new createjs.Shape();
  roof.graphics.beginStroke(primary).setStrokeStyle(thickness[0]);
  roof.graphics.moveTo(425, 30).lineTo(50, 250).lineTo(800, 250).closePath();   //TO-DO: ADJUST PADDING
  stage.addChild(roof);
}


//DRAW ROOM ONE (TOP-LEFT) ELEMENTS
function room1() {
    
  person(rulerX[2] - (rulerW[2] / 10), rulerY[2], 1);
  computer(rulerX[2] - (rulerW[2] / 20), rulerY[2] - (rulerH[1] / 3.2), 1);
    
  //Bed
  var bed = new createjs.Shape();
  bed.graphics.beginStroke(primary).setStrokeStyle(thickness[1]).drawRect(rulerX[1], rulerY[2] - (rulerH[1] / 4), (rulerW[2] / 2), (rulerH[1] / 4));
  stage.addChild(bed);
  
  //Bed Frame
  var frame = new createjs.Shape();
  frame.graphics.beginStroke(primary).setStrokeStyle(thickness[1]).drawRect(rulerX[1], rulerY[2] - (rulerH[1] / 2), (rulerW[2] / 16), (rulerH[1] / 4));
  stage.addChild(frame);
  
  //Table
  var table = new createjs.Shape();
  table.graphics.beginStroke(primary).beginFill(secondary).setStrokeStyle(thickness[1]).drawRect(rulerX[2] - (rulerW[2] / 6), rulerY[2] - (rulerH[1] / 3.2), (rulerW[2] / 6), (rulerH[1] / 3.2));
  stage.addChild(table);
  
  //Stool
  var stool = new createjs.Shape();
  stool.graphics.beginStroke(primary).setStrokeStyle(thickness[2]).drawRect(rulerX[2] - (rulerW[2] / 3.14), rulerY[2] - (rulerH[1] / 5), (rulerW[2] / 8), (rulerH[1] / 5));
  stage.addChild(stool);
}


//DRAW ROOM TWO (BOTTOM-LEFT) ELEMENTS
function room2() {
    
  person(rulerX[2] - (rulerW[2] / 3.5), rulerY[3], -1);
  computer(rulerX[2] - (rulerW[2] / 3.25), rulerY[3] - (rulerH[1] / 3.5), -1);
    
  //Chair
  var chair = new createjs.Shape();
  chair.graphics.beginStroke(primary).setStrokeStyle(thickness[1]).beginFill(secondary).drawRect(rulerX[2] - (rulerW[2] / 4), rulerY[3] - (rulerH[1] / 4), (rulerW[2] / 4), (rulerH[1] / 4));
  stage.addChild(chair);
  
  //Chair Frame
  var frame = new createjs.Shape();
  frame.graphics.beginStroke(primary).setStrokeStyle(thickness[1]).beginFill(secondary).drawRect(rulerX[2] - (rulerW[2] / 16), rulerY[3] - (rulerH[1] / 2), (rulerW[2] / 16), (rulerH[1] / 4));
  stage.addChild(frame);
  
  //Chair Arm
  var arm = new createjs.Shape();
  arm.graphics.beginStroke(primary).setStrokeStyle(thickness[1]).beginFill(secondary).drawRect(rulerX[2] - (rulerW[2] / 3.5), rulerY[3] - (rulerH[1] / 3.5), (rulerW[2] / 3.5), (rulerH[1] / 8));
  stage.addChild(arm);
  
  //Tree Trunk
  var trunk = new createjs.Shape();
  trunk.graphics.beginStroke(primary).setStrokeStyle(thickness[1]).drawRect(rulerX[1] + (rulerW[2] / 6) + (rulerW[2] / 12), rulerY[3] - (rulerH[1] / 8), (rulerW[2] / 12), (rulerH[1] / 8));
  stage.addChild(trunk);
  
  //Tree
  var tree = new createjs.Shape();
  tree.graphics.beginStroke(primary).setStrokeStyle(thickness[1]);
  tree.graphics.moveTo(rulerX[1] + (rulerW[2] / 12) + (rulerW[2] / 12), rulerY[3] - (rulerH[1] / 8));
  tree.graphics.lineTo(rulerX[1] + (rulerW[2] / 4) + (rulerW[2] / 12) + (rulerW[2] / 12), rulerY[3] - (rulerH[1] / 8))
  tree.graphics.lineTo(rulerX[1] + (rulerW[2] * 5 / 24) + (rulerW[2] / 12), rulerY[3] - (rulerH[1] / 2)).closePath();
  stage.addChild(tree);
}


//DRAW ROOM THREE (TOP-RIGHT) ELEMENTS
function room3() {
        
  //Bed
  var bed = new createjs.Shape();
  bed.graphics.beginStroke(primary).setStrokeStyle(thickness[1]).drawRect(rulerX[4] - (rulerW[2] / 1.5), rulerY[2] - (rulerH[1] / 4), (rulerW[2] / 1.5), (rulerH[1] / 4));
  stage.addChild(bed);
  
  //Bed Frame
  var frame = new createjs.Shape();
  frame.graphics.beginStroke(primary).setStrokeStyle(thickness[1]).drawRect(rulerX[4] - (rulerW[2] / 16), rulerY[2] - (rulerH[1] / 2), (rulerW[2] / 16), (rulerH[1] / 4));
  stage.addChild(frame);
  
  //Light
  var light = new createjs.Shape();
  light.graphics.beginStroke(primary).setStrokeStyle(thickness[1]).moveTo(rulerX[3] + (rulerW[2] / 4), rulerY[1]).lineTo(rulerX[3] + (rulerW[2] / 4), rulerY[1] + (rulerH[1] / 5));
  stage.addChild(light);
  
  //Bulb
  var bulb = new createjs.Shape();
  bulb.graphics.beginFill(secondary).beginStroke(primary).setStrokeStyle(thickness[1]).drawCircle(rulerX[3] + (rulerW[2] / 4), rulerY[1] + (rulerH[1] / 5), 12);
  stage.addChild(bulb);
}


//DRAW ROOM FOUR (BOTTOM-RIGHT) ELEMENTS
function room4() {
    
  person(rulerX[3] + (rulerW[2] / 3), rulerY[3], 1);
  computer(rulerX[3] + (rulerW[2] / 2.7), rulerY[3] - (rulerH[1] / 3.2), 1);
  
  //Stove
  var stove = new createjs.Shape();
  stove.graphics.beginStroke(primary).setStrokeStyle(thickness[1]).drawRect(rulerX[4] - (rulerW[2] / 6), rulerY[3] - (rulerH[1] / 2.8), (rulerW[2] / 6), (rulerH[1] / 2.8));
  stage.addChild(stove);
  
  //Hood
  var hood = new createjs.Shape();
  hood.graphics.beginStroke(primary).setStrokeStyle(thickness[1]);
  hood.graphics.moveTo(rulerX[4], rulerY[2] + (rulerH[1] / 12));
  hood.graphics.lineTo(rulerX[4], rulerY[2] + (rulerH[1] / 2.5))
  hood.graphics.lineTo(rulerX[4] - (rulerW[2] / 6), rulerY[2] + (rulerH[1] / 2.5)).closePath();
  stage.addChild(hood);
  
  //Table
  var table = new createjs.Shape();
  table.graphics.beginStroke(primary).setStrokeStyle(thickness[1]).beginFill(secondary).drawRect(rulerX[3], rulerY[3] - (rulerH[1] / 3.2), (rulerW[2] / 2), (rulerH[1] / 3.2));
  stage.addChild(table);
}


//DRAW BASEMENT ELEMENTS
function basement() {
    
  person(rulerX[4] - (rulerW[2] / 3.5) - (rulerW[2] / 10), rulerY[4], -1);
  computer(rulerX[4] - (rulerW[2] / 3.25) - (rulerW[2] / 10), rulerY[4] - (rulerH[1] / 3.5), -1);
    
  //Chair
  var chair = new createjs.Shape();
  chair.graphics.beginStroke(primary).setStrokeStyle(thickness[1]).beginFill(secondary).drawRect(rulerX[4] - (rulerW[2] / 4) - (rulerW[2] / 10), rulerY[4] - (rulerH[1] / 4), (rulerW[2] / 4), (rulerH[1] / 4));
  stage.addChild(chair);
  
  //Chair Frame
  var frame = new createjs.Shape();
  frame.graphics.beginStroke(primary).setStrokeStyle(thickness[1]).beginFill(secondary).drawRect(rulerX[4] - (rulerW[2] / 16) - (rulerW[2] / 10), rulerY[4] - (rulerH[1] / 2), (rulerW[2] / 16), (rulerH[1] / 4));
  stage.addChild(frame);
  
  //Chair Arm
  var arm = new createjs.Shape();
  arm.graphics.beginStroke(primary).setStrokeStyle(thickness[1]).beginFill(secondary).drawRect(rulerX[4] - (rulerW[2] / 3.5) - (rulerW[2] / 10), rulerY[4] - (rulerH[1] / 3.5), (rulerW[2] / 3.5), (rulerH[1] / 8));
  stage.addChild(arm);
  
  //Table
  var table = new createjs.Shape();
  table.graphics.beginStroke(primary).setStrokeStyle(thickness[1]).drawRect(rulerX[1] + (rulerW[2] / 3), rulerY[4] - (rulerH[1] / 3.2), rulerW[2], (rulerH[1] / 3.2));
  stage.addChild(table);
  
  //Light
  var light = new createjs.Shape();
  light.graphics.beginStroke(primary).setStrokeStyle(thickness[1]).moveTo(rulerX[2], rulerY[3]).lineTo(rulerX[2], rulerY[3] + (rulerH[1] / 3));
  stage.addChild(light);
  
  //Bulb
  var bulb = new createjs.Shape();
  bulb.graphics.beginFill(secondary).beginStroke(primary).setStrokeStyle(thickness[1]).drawCircle(rulerX[2], rulerY[3] + (rulerH[1] / 3), 12);
  stage.addChild(bulb);
  
  //Beams
  var beamA = new createjs.Shape();
  beamA.graphics.beginStroke(primary).setStrokeStyle(thickness[1]).beginFill(secondary).drawRect(rulerX[1] + (rulerW[3] / 3), rulerY[3], (rulerH[1] / 8), rulerH[1]);
  stage.addChild(beamA);
  
  var beamB = new createjs.Shape();
  beamB.graphics.beginStroke(primary).setStrokeStyle(thickness[1]).beginFill(secondary).drawRect(rulerX[4] - (rulerH[1] / 16) - (rulerW[3] / 3), rulerY[3], (rulerH[1] / 8), rulerH[1]);
  stage.addChild(beamB);
  
  var beamC = new createjs.Shape();
  beamC.graphics.beginStroke(primary).setStrokeStyle(thickness[1]).beginFill(secondary).drawRect(rulerX[4] - (rulerH[1] / 8), rulerY[3], (rulerH[1] / 8), rulerH[1]);
  stage.addChild(beamC);
  
  //Bar
  var bar = new createjs.Shape();
  bar.graphics.beginStroke(primary).setStrokeStyle(thickness[1]).beginFill(secondary).drawRect(rulerX[1], rulerY[3], rulerW[3], (rulerH[1] / 6));
  stage.addChild(bar);
}


//CREATES A PERSON
function person(x, y, direction) {
    
  //Legs
  var legA = new createjs.Shape();
  legA.graphics.beginStroke(primary).setStrokeStyle(thickness[2]).moveTo(x, y).lineTo(x - 5 * direction, y - 55);
  stage.addChild(legA);
  
  var legB = new createjs.Shape();
  legB.graphics.beginStroke(primary).setStrokeStyle(thickness[2]).moveTo(x - 5 * direction, y - 55).lineTo(x - 45 * direction, y - 55);
  stage.addChild(legB);
  
  //Body
  var body = new createjs.Shape();
  body.graphics.beginStroke(primary).setStrokeStyle(thickness[2]).moveTo(x - 45 * direction, y - 55).lineTo(x - 47 * direction, y - 140);
  stage.addChild(body);
  
  //Arms
  var armA = new createjs.Shape();
  armA.graphics.beginStroke(primary).setStrokeStyle(thickness[2]).moveTo(x - 45 * direction, y - 95).lineTo(x - 5 * direction, y - 90);
  stage.addChild(armA);
  
  var armB = new createjs.Shape();
  armB.graphics.beginStroke(primary).setStrokeStyle(thickness[2]).moveTo(x - 45 * direction, y - 96).lineTo(x - 5 * direction, y - 94);
  stage.addChild(armB);
    
  //Head
  var head = new createjs.Shape();
  head.graphics.beginFill(secondary).beginStroke(primary).setStrokeStyle(thickness[2]).drawCircle(x - 47 * direction, y - 140, 20);
  stage.addChild(head);
}


//CREATES A COMPUTER
function computer(x, y, direction) {
    
  //Screen
  var screen = new createjs.Shape();
  screen.graphics.beginStroke(primary).setStrokeStyle(thickness[2]).moveTo(x, y - 5).lineTo(x + 5 * direction, y - 35);
  stage.addChild(screen);
  
  //Keyboard
  var keys = new createjs.Shape();
  keys.graphics.beginStroke(primary).setStrokeStyle(thickness[2]).moveTo(x, y - 5).lineTo(x - 35 * direction, y - 5);
  stage.addChild(keys);
}
