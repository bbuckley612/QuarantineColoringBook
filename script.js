var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

function exportCanvas() {
  //https://stackoverflow.com/a/23684363
  var imgData = canvas.toDataURL("image/jpeg", 1.0);
  var pdf = new jsPDF();
  pdf.addImage(imgData, 'JPEG', 0, 0);
  pdf.save("download.pdf");
}
