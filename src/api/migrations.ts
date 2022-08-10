import "reflect-metadata"
import 'dotenv/config';
import { DataSource } from "typeorm"

import { Note } from "./models/note"
import { Client } from "./models/client";
import { Product } from './models/product';

/**
 * Creates tables on the provided db
 */
export const Migrations = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: (process.env.DB_PORT as unknown) as number,
    username: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_DBNAME,
    // TypeORM models comes here
    entities: [
        Note,
        Client,
        Product
    ],
    synchronize: true,
    logging: false,
});