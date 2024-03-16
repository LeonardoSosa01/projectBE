// iniciamos requiriendo los paquetes
const express = require("express");
const app = express();

// motor de plantilla
app.set("view engine", "ejs");

// primer servidor - rutas

app.get("/", function (req, res) {
  res.render("page/index");
});

app.get("/contacto", function (req, res) {
  res.render("page/contacto");
});
// realizar la solicitud

// puerto
app.listen(3030, () => {
  console.log("el servidor se esta ejecutando");
});
