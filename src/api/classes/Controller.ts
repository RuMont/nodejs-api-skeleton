import { Request, Response } from "express";

export abstract class Controller {
    public static index(req: Request, res: Response): any {}
}