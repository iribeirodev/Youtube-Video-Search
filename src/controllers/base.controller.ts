import express from "express";

export abstract class BaseController {
    public router: express.Router = express.Router();
    public abstract initializeRoutes(): void;
}
