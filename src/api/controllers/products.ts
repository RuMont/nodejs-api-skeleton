import { Request, Response } from "express";
import { Controller } from "../classes/Controller";
import { Migrations } from "../migrations";
import { Product } from '../models/product';

export class ProductsController extends Controller {
    
    constructor() {
        super()
    }

    public static async index(req: Request, res: Response) {
        try {
            const productsRepository = Migrations.getRepository(Product);
            let products;
            if (typeof req.query.id !== "undefined") {
                products = await productsRepository.findOneBy({
                    id: (req.query.id as unknown) as number
                });
            } else {
                products = await productsRepository.find();
            }
            return res.status(200).json(products);
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

    public static async delete(req: Request, res: Response) {
        try {
            res.json('Not yet implemented');
        } catch (error) {
            return res.status(500).json({ message: error });
        }
    }
    
}