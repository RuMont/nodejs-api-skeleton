import { Router } from "express";
import { routes } from "../routes";

export const registerRoutes = (router: Router) => {
    routes.map(({ url, callback, method }) => {
        switch (method.toUpperCase()) {
            case "GET":
                return router.get(url, (req, res) => callback(req, res));
            case "POST":
                return router.post(url, (req, res) => callback(req, res));
            case "PUT":
                return router.put(url, (req, res) => callback(req, res));
            case "DELETE":
                return router.delete(url, (req, res) => callback(req, res));
            default:
                break;
        }
    });
};