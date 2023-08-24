require('dotenv').config();
const express = require("express");
const hbs = require("hbs");


const app = express();
const port = process.env.PORT;

// Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials", function (err) {});

// Servir contenido estatico
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Federico Lloves",
    titulo: "Curso de Node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Federico Lloves",
    titulo: "Curso de Node",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Federico Lloves",
    titulo: "Curso de Node",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    nombre: "Federico Lloves",
    titulo: "Curso de Node",
  });
});

// app.get("/hola-mundo", (req, res) => {
//   res.send("Hola mundo desde la ruta");
// });

// app.get("/generic", (req, res) => {
//     res.sendFile(__dirname + '/public/generic.html');
// });

// app.get("/elements", (req, res) => {
//   res.sendFile(__dirname + "/public/elements.html");
// });

// app.get("*", (req, res) => {
//   res.sendFile(__dirname + "/public/404.html");
// });

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
