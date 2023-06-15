import {Request,Response} from "express";
import {handleHttp} from "../utils/error.handle";

export const getItem = (request: Request, response: Response) => {
    try {

    } catch (err) {
        handleHttp(response, 'ERROR_GET_ITEMS');
    }
};

export const getItems = (request: Request, response: Response) => {
    try {

    } catch (err) {
        handleHttp(response, 'ERROR_GET_ITEM');
    }
};

export const updateItem = (request: Request, response: Response) => {
    try {

    } catch (err) {
        handleHttp(response, 'UPDATE_ITEM');
    }
};

export const saveItem= (request: Request, response: Response) => {
    try {
        const item = request.body;

        return response.send(item);
    } catch (err) {
        handleHttp(response, 'SAVE_ITEM');
    }
};

export const deleteItem = (request: Request, response: Response) => {
    try {

    } catch (err) {
        handleHttp(response, 'DELETE_ITEM');
    }
};
