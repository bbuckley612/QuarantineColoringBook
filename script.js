var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

function exportCanvas() {
  //https://stackoverflow.com/a/23684363
  var imgData = canvas.toDataURL("image/jpeg", 1.0);
  var w = window.open("");
  w.document.write(imgData);
  var pdf = new jsPDF();
  pdf.addImage(imgData, 'JPEG', 0, 0);
  pdf.save("download.pdf");
}

//Test Stuff
/*context.beginPath();
context.moveTo(170, 80);
context.bezierCurveTo(130, 100, 130, 150, 230, 150);
context.bezierCurveTo(250, 180, 320, 180, 340, 150);
context.bezierCurveTo(420, 150, 420, 120, 390, 100);
context.bezierCurveTo(430, 40, 370, 30, 340, 50);
context.bezierCurveTo(320, 5, 250, 20, 250, 50);
context.bezierCurveTo(200, 5, 150, 20, 170, 80);
context.closePath();
context.lineWidth = 5;
context.fillStyle = '#8ED6FF';
context.fill();
context.strokeStyle = '#0000ff';
context.stroke();*/
