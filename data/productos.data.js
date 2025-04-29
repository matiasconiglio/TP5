let productos = [];
let contadorId = 1;

function agregarProducto(producto) {
  const nuevoProducto = { id: contadorId++, ...producto };
  productos.push(nuevoProducto);
  return nuevoProducto;
}

function obtenerProductos() {
  return productos;
}

function buscarProductoPorId(id) {
  return productos.find((p) => p.id === id);
}

function actualizarProductoEnData(id, nuevosDatos) {
  const index = productos.findIndex((p) => p.id === id);
  if (index === -1) {
    throw new Error("Producto no encontrado");
  }
  productos[index] = { ...productos[index], ...nuevosDatos };
  return productos[index];
}

function eliminarProductoEnData(id) {
  const index = productos.findIndex((p) => p.id === id);
  if (index === -1) {
    throw new Error("Producto no encontrado");
  }
  productos.splice(index, 1);
}

module.exports = {
  agregarProducto,
  obtenerProductos,
  buscarProductoPorId,
  actualizarProductoEnData,
  eliminarProductoEnData,
};
