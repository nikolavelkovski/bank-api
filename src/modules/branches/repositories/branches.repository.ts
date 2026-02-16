import { db } from "../../../config/database";
import { Branch } from "../types/branch.types";

export class BranchesRepository {
  async findAll(
    search?: string,
    city?: string,
    limit = 10,
    offset = 0,
  ): Promise<Branch[]> {
    const values: any[] = [];
    let query = `SELECT * FROM branches WHERE 1=1`;

    if (search) {
      values.push(`%${search}%`);
      query += ` AND name ILIKE $${values.length}`;
    }

    if (city) {
      values.push(city);
      query += ` AND city = $${values.length}`;
    }

    values.push(limit, offset);
    query += ` ORDER BY id LIMIT $${values.length - 1} OFFSET $${values.length}`;
    console.log(query, "query");
    const { rows } = await db.query(query, values);
    return rows;
  }

  async findOne(id: string): Promise<Branch | null> {
    const { rows } = await db.query(`SELECT * FROM branches WHERE id = $1`, [
      id,
    ]);
    return rows[0] || null;
  }

  async count(search?: string, city?: string): Promise<number> {
    const values: any[] = [];
    let query = `SELECT COUNT(*) FROM branches WHERE 1=1`;

    if (search) {
      values.push(`%${search}%`);
      query += ` AND name ILIKE $${values.length}`;
    }

    if (city) {
      values.push(city);
      query += ` AND city = $${values.length}`;
    }

    const { rows } = await db.query(query, values);
    return Number(rows[0]?.count || 0);
  }
}
