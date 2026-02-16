import fs from "fs";
import path from "path";
import { db } from "../config/database";

const run = async () => {
  try {
    const schemaPath = path.resolve(__dirname, "../database/schema.sql");
    const seedPath = path.resolve(__dirname, "../database/seed.sql");

    const schema = fs.readFileSync(schemaPath, "utf-8");
    const seed = fs.readFileSync(seedPath, "utf-8");

    await db.query(schema);
    console.log("Schema created");

    await db.query(seed);
    console.log("Seed data inserted");

    process.exit(0);
  } catch (error) {
    console.error("Error initializing database:", error);
    process.exit(1);
  }
};

run();
