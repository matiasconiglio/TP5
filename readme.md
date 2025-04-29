Descripción

Aplicación que implementa una API REST para la gestión de productos, respetando la separación en tres capas: presentación, negocio y datos

Endpoints usados

- `GET /productos` Listar todos los productos
- `GET /productos/:id` Obtener un producto por ID
- `POST /productos` Crear un nuevo producto
- `PUT /productos/:id` Actualizar un producto existente
- `DELETE /productos/:id` Eliminar un producto

Características que hacen que esta sea una API REST

- Utiliza métodos HTTP estándar (GET, POST, PUT, DELETE)
- Cada recurso (producto) se identifica mediante una URL clara (`/productos`)
- La comunicación es sin estado: cada solicitud es independiente.
- El formato de datos es JSON

Diferencias respecto a la arquitectura de 3 capas anterior

- Antes, la capa de presentación podía estar orientada a vistas HTML; ahora trabaja exclusivamente con datos JSON
- Ahora la comunicación es a través de endpoints REST, no páginas
- Se eliminó el acoplamiento a la interfaz de usuario, adaptándose a ser consumida por cualquier cliente (web, mobile, etc.)
- Sigue respetando la separación en 3 capas: rutas → servicios → datos
