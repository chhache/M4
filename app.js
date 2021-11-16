const express = require('express')
const app = express()
const path = require('path'); //modulo nativo de Node.js, para concatenar palabras diferente al .resolve ./ autocompleta y evita usar __dirname
const port = 3030
 
app.get("/", (req, res) => {
  //let htmlPath = path.join(__dirname, '/views/index.html');
  res.sendFile(path.join(__dirname, '/views/index.html'));
})

app.get('/babbage', function (req, res) {
    let htmlPath = path.join(__dirname, '/views/babbage.html');
    res.sendFile(htmlPath)
  })

app.get('/berners-lee', function (req, res) {
    let htmlPath = path.join(__dirname, '/views/berners-lee.html');
    res.sendFile(htmlPath)
  })

app.get('/clarke', function (req, res) {
    let htmlPath = path.join(__dirname, '/views/clarke.html');
    res.sendFile(htmlPath)
  })

app.get('/hamilton', function (req, res) {
    let htmlPath = path.join(__dirname, '/views/hamilton.html');
    res.sendFile(htmlPath)
  })

app.get('/hopper', function (req, res) {
    let htmlPath = path.join(__dirname, '/views/hooper.html');
    res.sendFile(htmlPath)
  })  

app.get('/lovelace', function (req, res) {
    let htmlPath = path.join(__dirname, '/views/lovelace.html');
    res.sendFile(htmlPath)
  })
  
app.get('/turing', function (req, res) {
    let htmlPath = path.join(__dirname, '/views/turing.html');
    res.sendFile(htmlPath)
  })
  
// app.get('/about', function (req, res) {
//     res.send('esta es la respuesta del /about')
//   })

// comando para aclarar a node donde localizar la ubicación de archivos estáticos
app.use(express.static('public'));


//Usar variable dentro de un string -> `${var}` Ej: `{$port + 50}`  
app.listen(port, () => console.log(`Servidor escuchando el puerto ${port}`));
