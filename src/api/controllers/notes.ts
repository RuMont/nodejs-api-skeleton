import { Request, Response } from "express";
import { Controller } from "../classes/Controller";
import { Migrations } from '../migrations';
import { Note } from "../models/note";

export class NotesController extends Controller {
    
    constructor() {
        super()
    }
    /**
     * Queries in the DB and fetches all notes data
     * @param req Not used
     * @param res Sends all notes or an error message
     * @returns 200 is ok, 500 if query fails
     */
    public static async index(req: Request, res: Response) {
        try {
            const notesRepository = Migrations.getRepository(Note);
            let notes;
            if (typeof req.query.id !== "undefined") {
                notes = await notesRepository.findOneBy({
                    id: (req.query.id as unknown) as number
                });
            } else {
                notes = await notesRepository.find({
                    relations: {
                        client: true,
                        products: true
                    },
                    order: {
                        deliveryDate: "ASC"
                    }
                });
            }
            return res.status(200).json(notes);
        } catch (error) {
            return res.status(500).json({ message: error });
        }
    }

    public static async create(req: Request, res: Response) {
        try {
            res.json('Not yet implemented');
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
    
}