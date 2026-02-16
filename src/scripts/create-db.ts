import { Client } from "pg";
import { env } from "../config/env";

const createDatabase = async () => {
  const client = new Client({
    host: env.DB_HOST,
    port: env.DB_PORT,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: "postgres",
  });

  try {
    await client.connect();

    await client.query(`CREATE DATABASE ${env.DB_NAME}`);
    console.log(`Database ${env.DB_NAME} created`);
  } catch (error: any) {
    if (error.code === "42P04") {
      console.log("Database already exists");
      return;
    }
    console.error(error);
  } finally {
    await client.end();
  }
};

createDatabase();
