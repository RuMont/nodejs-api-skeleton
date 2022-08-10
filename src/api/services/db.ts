import { ConnectionConfig } from "mysql";
import { createConnection, Connection } from "mysql2";
import 'dotenv/config';

class Db {
    private connection: Connection;
    constructor({ host, port, user, password, database }: ConnectionConfig) {
        this.connection = createConnection({
            host,
            port,
            user,
            password,
            database
        });

        this.connection.connect((err) => {
            if (err) throw err;
            console.log(`Database ${database} is running on port ${port}`);
        });
    }

    public getConnection(): Connection {
        return this.connection;
    }
}

export default new Db({
    host: process.env.DB_HOST,
    port: (process.env.DB_PORT as unknown) as number,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_DBNAME
});