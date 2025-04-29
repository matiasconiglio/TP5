const {
  agregarProducto,
  obtenerProductos,
  buscarProductoPorId,
  actualizarProductoEnData,
  eliminarProductoEnData,
} = require("../data/productos.data");

function listarProductos() {
  return obtenerProductos();
}

function obtenerProductoPorId(id) {
  return buscarProductoPorId(id);
}

function crearProducto(producto) {
  if (!producto.nombre || !producto.precio) {
    throw new Error("El producto debe tener nombre y precio");
  }
  return agregarProducto(producto);
}

function actualizarProducto(id, datosActualizados) {
  return actualizarProductoEnData(id, datosActualizados);
}

function eliminarProducto(id) {
  return eliminarProductoEnData(id);
}

module.exports = {
  listarProductos,
  obtenerProductoPorId,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
};
