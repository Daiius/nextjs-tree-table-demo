import { drizzle, MySql2Database } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

import * as schema from './schema';

//jest.mock('./db', () => ({
//  db: undefined,
//}))

let connection: mysql.Connection
let db: MySql2Database<typeof schema>

beforeAll(async () => {
  connection = await mysql.createConnection({
    host: 'database',
    user: 'user',
    database: 'database',
    password: 'password',
  });
  db = drizzle(connection, { schema: schema, mode: 'default' });
});

afterAll(() => {
  connection.end()
})

describe('database tests', () => {
  it('insert ignore test data', async () => {
    await db.delete(schema.users);
    await db.insert(schema.users).values([
      { name: 'Jane Doe' },
      { name: 'John Doe' },
    ]);

    const users = await db.query.users.findMany();
    expect(users.length).toBe(2);
  }, 1000);
});