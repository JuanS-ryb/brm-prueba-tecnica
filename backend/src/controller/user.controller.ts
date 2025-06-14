import { Request, Response } from "express";
import db from "../config/connection";
import { users } from "../schemas/user";
import { eq, ilike, and, or } from "drizzle-orm";
import bcrypt from "bcryptjs";
import validator from "validator";

export const getAllUsers = async (req: Request, res: Response) => {
  const { search, date_of_birth, city, country, gender, is_active } = req.query;

  try {
    let baseQuery = db.select().from(users);
    const conditions = [];

    if (typeof search === "string" && search.trim() !== "") {
      conditions.push(
        or(
          ilike(users.firstName, `%${search}%`),
          ilike(users.lastName, `%${search}%`),
          ilike(users.email, `%${search}%`),
          ilike(users.phoneNumber, `%${search}%`)
        )
      );
    }

    if (typeof date_of_birth === "string") {
      conditions.push(eq(users.dateOfBirth, date_of_birth));
    }
    if (typeof city === "string") {
      conditions.push(ilike(users.city, `%${city}%`));
    }
    if (typeof country === "string") {
      conditions.push(ilike(users.country, `%${country}%`));
    }
    if (typeof gender === "string") {
      conditions.push(eq(users.gender, gender));
    }
    if (typeof is_active === "string") {
      conditions.push(eq(users.isActive, is_active === "true"));
    }

    const finalQuery =
      conditions.length > 0 ? baseQuery.where(and(...conditions)) : baseQuery;

    const result = await finalQuery;
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users", details: error });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await db
      .select()
      .from(users)
      .where(eq(users.id, Number(req.params.id)));

    if (user.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user[0]);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user", details: error });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const {
      first_name,
      last_name,
      email,
      password,
      date_of_birth,
      phone_number,
      address,
      city,
      country,
      gender,
    } = req.body;

    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: "Email inválido" });
    }

    if (!password || password.length < 6) {
      return res
        .status(400)
        .json({ error: "La contraseña debe tener al menos 6 caracteres" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await db
      .insert(users)
      .values({
        firstName: first_name,
        lastName: last_name,
        email,
        password: hashedPassword,
        dateOfBirth: date_of_birth,
        phoneNumber: phone_number,
        address,
        city,
        country,
        gender,
      })
      .returning();

    res.status(201).json(newUser[0]);
  } catch (error) {
    console.error("Error al crear usuario:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const allowedFields = [
      "first_name",
      "last_name",
      "date_of_birth",
      "address",
      "city",
      "country",
    ];

    const updates: any = {};
    for (const key of allowedFields) {
      if (key in req.body) {
        switch (key) {
          case "first_name":
            updates.firstName = req.body[key];
            break;
          case "last_name":
            updates.lastName = req.body[key];
            break;
          case "date_of_birth":
            updates.dateOfBirth = req.body[key];
            break;
          default:
            updates[key] = req.body[key];
        }
      }
    }

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ message: "No valid fields to update" });
    }

    const updatedUser = await db
      .update(users)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(users.id, Number(req.params.id)))
      .returning();

    if (updatedUser.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser[0]);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deleted = await db
      .delete(users)
      .where(eq(users.id, Number(req.params.id)))
      .returning();

    if (deleted.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
