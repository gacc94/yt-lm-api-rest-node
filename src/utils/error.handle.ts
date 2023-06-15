import {Response} from "express";

export const handleHttp = (response: Response, error: string, errorRaw?: Object) => {
    return response.status(500).send({error});
}