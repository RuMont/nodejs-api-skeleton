import { Request, Response } from "express";
import { Controller } from "../classes/Controller";
import { Migrations } from "../migrations";
import { Client } from '../models/client';

export class ClientsController extends Controller {

    constructor() {
        super()
    }

    /**
     * Queries in the DB and fetches all clients data
     * @param req Not used
     * @param res Sends all clients or an error message
     * @returns 200 is ok, 500 if query fails
     */
    public static async index(req: Request, res: Response) {
        try {
            const clientsRepository = Migrations.getRepository(Client);
            let clients;
            if (typeof req.query.id !== "undefined") {
                clients = await clientsRepository.findOneBy({
                    id: (req.query.id as unknown) as number
                });
            } else {
                clients = await clientsRepository.find();
            }
            return res.status(200).json(clients);
        } catch (error) {
            return res.status(500).json({ message: error });
        }
    }

    /**
     * Creates new clients in the DB
     * @param req Body needs to be Client[] type
     * @param res Sends a success or an error message
     * @returns 200 if ok, 400 if body is not well formed, 500 if query fails
     */
    public static async create(req: Request, res: Response) {
        try {
            try {
                if (typeof req.body[Symbol.iterator] !== "function")
                    return res.status(400).json({
                        message: 'Object must be iterable and type Client[]',
                        type: [{ name: "string", address: "string | null", phoneNumber: "string" }]
                    });

                for (const element of req.body) {
                    if (!this.isRealClient(element))
                        return res.status(400).json({
                            message: 'Object must be type Client[]',
                            type: [{ name: "string", address: "string | null", phoneNumber: "string" }]
                        });
                };

                const clientsRepository = Migrations.getRepository(Client);
                const clienstBulk = clientsRepository.create(req.body);
                await clientsRepository.save(clienstBulk);
                return res.status(200).json(
                    { message: "Data successfully inserted into the DB." }
                );
            } catch (error) {
                return res.status(400).json({ message: error });
            }
        } catch (error) {
            return res.status(500).json({ message: error });
        }
    }

    public static async update(req: Request, res: Response) {
        try {
            res.json('Not yet implemented');
        } catch (error) {
            return res.status(500).json({ message: error });
        }
    }

    public static async delete(req: Request, res: Response) {
        try {
            res.json('Not yet implemented');
        } catch (error) {
            return res.status(500).json({ message: error });
        }
    }

    /**
     * Checks if an object is Client type
     * @param client Object to check
     * @returns true if object is type Client, false otherwise.
     */
    public static isRealClient(client: Client) {
        const placeholderClient = new Client();
        placeholderClient.name = "PHName";
        placeholderClient.address = "PHAddress";
        placeholderClient.phoneNumber = "PHPhoneNumber";

        for (const key in placeholderClient) {
            if (!Object.prototype.hasOwnProperty.call(client, key)) {
                return false;
            }
        }
        return true;
    }
}