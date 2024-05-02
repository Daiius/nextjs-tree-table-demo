import { connection, db } from '.';
import { migrate } from 'drizzle-orm/mysql2/migrator';


await migrate(db, { migrationsFolder: './drizzle/dev' });

await connection.end();
