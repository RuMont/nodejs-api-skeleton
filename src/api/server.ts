import express, { json, Router } from "express";
import { noSniff, hidePoweredBy} from "helmet";
import * as http from "http";
import cors from 'cors';
import path from "path";
import 'dotenv/config';

import { Migrations } from "./migrations";
import { registerRoutes } from "./helpers";
import { envValidator } from "./middlewares/envValidator";

export class Server {
    private express: express.Express;
    private port: number;
    private serverInstance?: http.Server;

    constructor(port: number) {
        this.port = port;
        this.express = express();
        this.express.use(cors());
        this.express.use(json());
        this.express.use(noSniff());
        this.express.use(hidePoweredBy());
        this.express.use(express.static(path.join(__dirname, 'public')));

        const router = Router();
        this.express.use(router);
        registerRoutes(router);

        // 404 handler
        this.express.use((req, res) => {
            res.status(404).json({ error: "Not found" });
        });
    }

    /**
     * Initializes the http server
     */
    listen() {
        this.serverInstance = this.express.listen(this.port, async () => {
            envValidator();
            try {
                await Migrations.initialize();
            } catch (error) {
                throw new Error(`Failed to migrate tables to ${process.env.DB_PROVIDER}: ${error}`);
            }
            console.log(`Server running on http://localhost:${this.port}`);
        });
    }

    /**
     * Shutdowns the server process
     */
    shutdown() {
        if (this.serverInstance) {
            this.serverInstance.close(err => err && console.log(err.message));
        }
    }
}