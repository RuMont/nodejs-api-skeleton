import { Request, Response } from "express";
import { Controller } from "../classes/Controller";

export class MainController extends Controller {
    
    constructor() {
        super()
    }

    public static index(req: Request, res: Response) {
        return res.status(200).json({status: "No issues detected"});
    }
    
}