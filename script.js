var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

function exportCanvas() {
  //https://stackoverflow.com/a/23684363
  var imgData = canvas.toDataURL("image/jpeg", 1.0);
  var pdf = new jsPDF();
  //https://stackoverflow.com/a/36509632
  var width = pdf.internal.pageSize.getWidth();
  console.log(width);
  var height = pdf.internal.pageSize.getHeight();
  console.log(height);
  //https://stackoverflow.com/a/23684363
  pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
  pdf.save("download.pdf");
}
