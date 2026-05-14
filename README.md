# 💄 Makeup API

API REST desarrollada con **Node.js**, **Express**, **TypeScript** y **MongoDB** para la gestión de una tienda de maquillaje.

El proyecto implementa:
- Arquitectura modular
- CRUD completo
- Autenticación JWT
- Swagger/OpenAPI
- Middleware de autenticación
- Despliegue en Render

---

# Descripción del proyecto

Makeup API permite administrar diferentes módulos relacionados con una tienda de maquillaje, incluyendo:

- Usuarios
- Autenticación
- Categorías
- Marcas
- Productos Makeup
- Inventario
- Reviews o reseñas

La aplicación fue desarrollada utilizando una arquitectura organizada basada en:

- Controller
- Service
- Repository
- Model
- Routes

---

# Tecnologías utilizadas

| Tecnología | Descripción |
|---|---|
| Node.js | Entorno de ejecución |
| Express | Framework backend |
| TypeScript | Lenguaje principal |
| MongoDB | Base de datos NoSQL |
| JWT | Autenticación |
| Swagger/OpenAPI | Documentación API |
| Render | Despliegue |
| Postman | Pruebas de endpoints |

---

# Arquitectura del proyecto

El proyecto sigue una arquitectura modular y escalable.

## 📂 Estructura completa

```bash
src/
│
├── api/
│   └── v1/
│       └── index.ts
│
├── config/
│   ├── database.ts
│   ├── env.ts
│   └── openapi.ts
│
├── libs/
│   ├── bcrypt.ts
│   ├── jwt.ts
│   └── errors.ts
│
├── middlewares/
│   ├── auth.middleware.ts
│   └── error.middleware.ts
│
├── modules/
│   │
│   ├── auth/
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── auth.routes.ts
│   │   └── auth.repository.ts
│   │
│   ├── users/
│   │   ├── users.model.ts
│   │   ├── users.repository.ts
│   │   ├── users.service.ts
│   │   ├── users.controller.ts
│   │   └── users.routes.ts
│   │
│   ├── categories/
│   │   ├── category.model.ts
│   │   ├── category.repository.ts
│   │   ├── category.service.ts
│   │   ├── category.controller.ts
│   │   └── category.routes.ts
│   │
│   ├── brands/
│   │   ├── brand.model.ts
│   │   ├── brand.repository.ts
│   │   ├── brand.service.ts
│   │   ├── brand.controller.ts
│   │   └── brand.routes.ts
│   │
│   ├── inventories/
│   │   ├── inventory.model.ts
│   │   ├── inventory.repository.ts
│   │   ├── inventory.service.ts
│   │   ├── inventory.controller.ts
│   │   └── inventory.routes.ts
│   │
│   ├── makeups/
│   │   ├── makeup.model.ts
│   │   ├── makeup.repository.ts
│   │   ├── makeup.service.ts
│   │   ├── makeup.controller.ts
│   │   └── makeup.routes.ts
│   │
│   └── reviews/
│       ├── review.model.ts
│       ├── review.repository.ts
│       ├── review.service.ts
│       ├── review.controller.ts
│       └── review.routes.ts
│
├── app.ts
└── server.ts