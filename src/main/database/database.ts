import { createConnection } from "typeorm";
import Course from "./entities/Course";
import Module from "./entities/Module";

interface DatabaseInformation {
  host: string,
  port: number,
  username: string,
  password: string,
  database: string
}

function getDatabaseInformation(): DatabaseInformation {
  return {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PORT,
    database: process.env.DATABASE_NAME
  }
}

export function setupDatabase() {
  const { host, port, username, password, database } = getDatabaseInformation();

  (async () => {
    try {
      await createConnection({
        type: 'postgres',
        host,
        port,
        username,
        password,
        database,
        entities: [
          Course,
          Module
        ],
        synchronize: true,
        logging: ['error', 'query']
      })
      console.log('Database connection created')
    } catch (e) {
      console.error('Error creating database connection: ', e)
    }
  })()
}