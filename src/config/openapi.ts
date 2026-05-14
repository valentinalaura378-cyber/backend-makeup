import swaggerJsdoc from "swagger-jsdoc";
import path from "path";

export const openApiSpec = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",

    info: {
      title: "Makeup API",
      version: "1.0.0",
      description: "Documentacion de endpoints de la API",
    },

    servers: [
      {
        url: "http://localhost:3000/api/v1",
        description: "Servidor local"
      },
      {
        url: "https://backend-makeup.onrender.com/api/v1",
        description: "Servidor produccion"  
      }
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },

    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  apis: [path.join(__dirname, "../modules/**/*.routes.{ts,js}")],
});