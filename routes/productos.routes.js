const express = require("express");
const router = express.Router();
const {
  listarProductos,
  obtenerProductoPorId,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
} = require("../services/productos.service");

router.get("/productos", (req, res) => {
  res.json(listarProductos());
});

router.get("/productos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const producto = obtenerProductoPorId(id);
  if (producto) {
    res.json(producto);
  } else {
    res.status(404).json({ mensaje: "Producto no encontrado" });
  }
});

router.post("/productos", (req, res) => {
  try {
    const nuevoProducto = crearProducto(req.body);
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/productos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const productoActualizado = actualizarProducto(id, req.body);
    res.json(productoActualizado);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.delete("/productos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  try {
    eliminarProducto(id);
    res.json({ mensaje: "Producto eliminado correctamente" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
