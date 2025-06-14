import { migrate } from "drizzle-orm/node-postgres/migrator";
import db from "../config/connection";
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

async function runMigrations() {
  try {
    console.log("Running migrations...");

    const pool = new Pool({
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      port: Number(process.env.PORT),
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    });

    await migrate(db, { migrationsFolder: "./src/db/migrations" });

    console.log("Migrations completed successfully");
    await pool.end();
    process.exit(0);
  } catch (error) {
    console.error("Migration failed:", error);
    process.exit(1);
  }
}

runMigrations();
