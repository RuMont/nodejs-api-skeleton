import { Server } from '../server';
import 'dotenv/config';

export class Init {
    private server?: Server;

    /**
     * Starts the app
     */
    constructor() {
        this.server = new Server((process.env.APP_PORT as unknown) as number || 3000);
        this.server?.listen();
    }

    stop() {
        this.server?.shutdown();
    }
}