import { Request, Response } from "express";

import { IRoute } from "../interfaces/IRoute";

import { MainController } from "../controllers";
import { NotesController } from "../controllers/notes";
import { ClientsController } from "../controllers/clients";
import { ProductsController } from "../controllers/products";

export const routes: Array<IRoute> = [
    // General
    {
        url: '/api',
        method: "GET",
        callback: (req: Request, res: Response) => MainController.index(req, res)
    },

    // Notes
    {
        url: '/api/notes',
        method: "GET",
        callback: (req: Request, res: Response) => NotesController.index(req, res)
    },
    {
        url: '/api/notes',
        method: "POST",
        callback: (req: Request, res: Response) => NotesController.create(req, res)
    },
    {
        url: '/api/notes',
        method: "PUT",
        callback: (req: Request, res: Response) => NotesController.update(req, res)
    },

    // Clients
    {
        url: '/api/clients',
        method: "GET",
        callback: (req: Request, res: Response) => ClientsController.index(req, res)
    },
    {
        url: '/api/clients',
        method: "POST",
        callback: (req: Request, res: Response) => ClientsController.create(req, res)
    },
    {
        url: '/api/clients',
        method: "PUT",
        callback: (req: Request, res: Response) => ClientsController.update(req, res)
    },

    // Products
    {
        url: '/api/products',
        method: "GET",
        callback: (req: Request, res: Response) => ProductsController.index(req, res)
    },
    {
        url: '/api/products',
        method: "POST",
        callback: (req: Request, res: Response) => ProductsController.create(req, res)
    },
    {
        url: '/api/products',
        method: "PUT",
        callback: (req: Request, res: Response) => ProductsController.update(req, res)
    }
]