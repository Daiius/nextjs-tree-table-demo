import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2';

export const connection = await mysql.createConnection({
  host: 'database',
  user: 'user',
  database: 'database',
  password: 'password',
});

export const db = drizzle(connection, { mode: 'default' });
