
const express = require("express");
const app = express();
const productosRoutes = require("./routes/productos.routes");

app.use(express.json());
app.use("/", productosRoutes);

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});

