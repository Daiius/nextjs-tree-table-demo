import {
  int,
  text,
  mysqlTable,
  mysqlSchema,
} from 'drizzle-orm/mysql-core';

//export const schema = mysqlSchema('database');

export const users = mysqlTable('users', {
  id: int('id').primaryKey().autoincrement(),
  name: text('name'),
});
