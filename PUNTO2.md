REST y Microservicios

1. Qué diferencias observan entre una arquitectura REST y una arquitectura de microservicios?

Una arquitectura REST define cómo debe estructurarse la comunicación entre cliente y servidor usando el protocolo HTTP y operaciones estandar (GET, POST, PUT, DELETE) REST puede ser implementado tanto en aplicaciones monolíticas
como en distribuidas
En cambio, la arquitectura de microservicios es un estilo arquitectonico que organiza una aplicacion como un conjunto de servicios pequeños independientes entre sí, que se comunican principalmente mediante APIs REST o mensajería.
Cada microservicio tiene una responsabilidad especifica y puede ser desplegado, probado y escalado de forma individual

2. Cuáles creen que serían los desafíos si quisieran dividir su aplicación REST actual en microservicios?

1) Identificar límites claros entre servicios (por ej, productos, usuarios, pagos, etc)
2) Separar los datos: cada microservicio debe tener su propia base de datos
3) Establecer mecanismos de comunicación entre servicios, como HTTP
4) Implementar herramientas de orquestación y descubrimiento de servicios
5) Manejar correctamente los errores y fallas en la red entre servicios
6) Aumentar la complejidad en el despliegue y monitoreo (necesidad de Docker, Kubernetes, etc)

7) ¿Qué ventajas teóricas ven en los microservicios frente a una API REST monolítica?

- Escalabilidad: podemos escalar solo los servicios que lo necesiten
- Resiliencia: un error en un microservicio no derriba toda la aplicación
- Desarrollo paralelo: varios equipos pueden trabajar en distintos microservicios a la vez
- Mantenibilidad: al ser más pequeños, los servicios son más fáciles de entender, probar y actualizar
- Flexibilidad tecnológica: cada microservicio puede usar el lenguaje y tecnología más adecuados a su propósito
