var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

function exportCanvas() {
  //https://stackoverflow.com/a/23684363
  //https://stackoverflow.com/a/36509632
  //https://stackoverflow.com/a/19290964
  var imgData = canvas.toDataURL("image/jpeg", 1.0);
  var pdf = new jsPDF('p', 'px', 'letter');
  pdf.addImage(imgData, 'JPEG', 0, 0, 850, 1100);
  pdf.save("download.pdf");
}

//https://stackoverflow.com/a/49745434
context.fillStyle = 'black';
context.fillRect(0, 0, canvas.width, canvas.height);
