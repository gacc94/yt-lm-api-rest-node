import {NextFunction, Request, Response} from "express";

export const logMiddleware = (request: Request ,response: Response, next: NextFunction) => {
    console.log("Hola Soy un Log XD")
    next();
};