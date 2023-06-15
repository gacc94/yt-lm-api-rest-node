import {Request,Response} from "express";
import {handleHttp} from "../utils/error.handle";


export const getOrders = (request: Request, response: Response) => {
    try {
        response.send({
            user: request.body,
            data: 'ESTO SOLO LO VEN LAS PERSONAS CON SESSION / JWT'
        })
    } catch (err) {
        handleHttp(response, 'ERROR_GET_ORDERS');
    }
};

