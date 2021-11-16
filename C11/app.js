const express = require('express');
const app = express();
const path = require('path'); //modulo nativo de Node.js, para concatenar palabras diferente al .resolve ./ autocompleta y evita usar __dirname
const port = 3000;

// const publicPath = path.resolve(__dirname, './public'); //recibe argu dirActual, ./ subir un dir y buscar public
// app.use(express.static(publicPath))  //Informar que queremos usar archivos estáticos -> path

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.listen(port, () => console.log(`Servidor corriendo en port ${port}`));

//Al ingresar en el navegador al sitio / Obtener el contenido de home.html a través del método get y recibiendo el archivo 
// a traves de sendFile.  Revisar path absoluto en el argumento res.
app.get('/', (req, res) => res.sendFile(path.join(__dirname, "/views/home.html")));
