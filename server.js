
var express = require('express');

var QRCode = require('qrcode');

var fs = require("fs"); 






var app = express();

app.get('/', function(req, res) {  


	var texto = req.query.texto; 


	


	
	QRCode.toFile('./qr.png', texto, {
  scale: '8'
  // color: {
  //   dark: '#ffffff',  // Blue dots
  //   light: '#0000', // Transparent background
  //   // escala
  // }
}, function (err) {
  if (err) throw err
  console.log('done')

 	var archivo = './qr.png';

	if (fs.existsSync(archivo)) {
		//console.log(archivo);
	
	var file = fs.createReadStream('./qr.png');
	var stat = fs.statSync('./qr.png');

	//console.log(stat.size);
	
	res.setHeader('Content-Length', stat.size);
	res.setHeader('Content-Type', 'image/png');
	//res.setHeader('Content-Disposition', 'attachment; filename='+archivo);
	file.pipe(res);

	}
	console.log(archivo);
})


	




})



app.listen(3000); 
console.log("escuchando puerto 3000")