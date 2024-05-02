import type { Config } from 'drizzle-kit';

export default {
  schema: './src/db/schema.ts',
  out: './drizzle/dev',
  driver: 'mysql2',
  dbCredentials: {
    host: 'database',
    user: 'user',
    password: 'password',
    database: 'database',
  }
} satisfies Config;
