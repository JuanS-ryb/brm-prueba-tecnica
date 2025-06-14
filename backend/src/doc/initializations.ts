import { Components, Paths } from "swagger-jsdoc";

export const swaggerComponents: Components = {
  schemas: {
    User: {
      type: "object",
      properties: {
        id: { type: "integer" },
        first_name: { type: "string", require: true },
        last_name: { type: "string", require: true },
        email: { type: "string", format: "email", require: true },
        password: { type: "string", require: true },
        date_of_birth: { type: "string", format: "date", require: true },
        phone_number: { type: "string" },
        address: { type: "string" },
        city: { type: "string" },
        country: { type: "string" },
        gender: { type: "string", require: true },
        is_active: { type: "boolean" },
        created_at: { type: "string", format: "date-time" },
        updated_at: { type: "string", format: "date-time" },
      },
    },
    NewUser: {
      type: "object",
      required: ["first_name", "last_name", "email", "password"],
      properties: {
        first_name: { type: "string" },
        last_name: { type: "string" },
        email: { type: "string", format: "email" },
        password: { type: "string" },
        date_of_birth: { type: "string", format: "date" },
        phone_number: { type: "string" },
        address: { type: "string" },
        city: { type: "string" },
        country: { type: "string" },
        gender: { type: "string" },
      },
    },
    UpdateUser: {
      type: "object",
      properties: {
        first_name: { type: "string" },
        last_name: { type: "string" },
        email: { type: "string", format: "email" },
        password: { type: "string" },
        date_of_birth: { type: "string", format: "date" },
        phone_number: { type: "string" },
        address: { type: "string" },
        city: { type: "string" },
        country: { type: "string" },
        gender: { type: "string" },
        is_active: { type: "boolean" },
      },
    },
  },
};

export const swaggerPaths: Paths = {
  "/user/": {
    get: {
      summary: "Get all users with optional filters",
      tags: ["User"],
      parameters: [
        {
          name: "search",
          in: "query",
          required: false,
          schema: { type: "string" },
          description: "Search by name, email, or phone number",
        },
        {
          name: "date_of_birth",
          in: "query",
          required: false,
          schema: { type: "string", format: "date" },
          description: "Filter by date of birth (YYYY-MM-DD)",
        },
        {
          name: "city",
          in: "query",
          required: false,
          schema: { type: "string" },
        },
        {
          name: "country",
          in: "query",
          required: false,
          schema: { type: "string" },
        },
        {
          name: "gender",
          in: "query",
          required: false,
          schema: { type: "string", enum: ["male", "female", "other"] },
        },
        {
          name: "is_active",
          in: "query",
          required: false,
          schema: { type: "boolean" },
          description: "Filter by active status",
        },
      ],
      responses: {
        200: {
          description: "List of users",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/User" },
              },
            },
          },
        },
        500: { description: "Server error" },
      },
    },
    post: {
      summary: "Create a new user",
      tags: ["User"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/NewUser" },
          },
        },
      },
      responses: {
        201: {
          description: "User created successfully",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/User" },
            },
          },
        },
        400: {
          description: "Invalid input (e.g., invalid email or weak password)",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  error: { type: "string", example: "Email inválido" },
                },
              },
            },
          },
        },
        500: {
          description: "Internal server error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  error: {
                    type: "string",
                    example: "Error interno del servidor",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "/user/{id}": {
    get: {
      summary: "Get user by ID",
      tags: ["User"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "integer" },
        },
      ],
      responses: {
        200: {
          description: "User found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/User" },
            },
          },
        },
        404: { description: "User not found" },
      },
    },
    put: {
      summary: "Update a user by ID",
      tags: ["User"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "integer" },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                first_name: { type: "string" },
                last_name: { type: "string" },
                date_of_birth: { type: "string", format: "date" },
                address: { type: "string" },
                city: { type: "string" },
                country: { type: "string" },
              },
              example: {
                first_name: "Carlos",
                last_name: "Gómez",
                date_of_birth: "1992-03-12",
                address: "Av. Reforma 123",
                city: "Ciudad de México",
                country: "México",
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "User updated",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/User" },
            },
          },
        },
        400: {
          description: "No valid fields to update",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "No valid fields to update",
                  },
                },
              },
            },
          },
        },
        404: {
          description: "User not found",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string", example: "User not found" },
                },
              },
            },
          },
        },
      },
    },
    delete: {
      summary: "Delete a user by ID",
      tags: ["User"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "integer" },
        },
      ],
      responses: {
        204: { description: "User deleted successfully" },
        404: { description: "User not found" },
      },
    },
  },
};
