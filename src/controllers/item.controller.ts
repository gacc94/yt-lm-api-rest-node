import {Request,Response} from "express";
import {handleHttp} from "../utils/error.handle";
import {creatCard, deleteCard, getCard, getCards, updateCard,} from "../services/item.service";

export const getItem = async (request: Request, response: Response) => {
    try {
        const {id} = request.params;
        const card = await getCard(id);
        if (!card) response.status(404).send('NOT_FOUND');
        return response.status(200).send(card);
    } catch (err) {
        handleHttp(response, 'ERROR_GET_ITEM');
    }
};

export const getItems = async (request: Request, response: Response) => {
    try {
        const cards = await getCards();
        return response.status(200).send(cards);
    } catch (err) {
        handleHttp(response, 'ERROR_GET_ITEM');
    }
};

export const updateItem = async (request: Request, response: Response) => {
    try {
        const {id} = request.params;
        const currentCard = request.body;
        const newCard = await updateCard(id, currentCard);

        return response.status(200).send(newCard);

    } catch (err) {
        handleHttp(response, 'UPDATE_ITEM');
    }
};

export const saveItem= async (request: Request, response: Response) => {
    try {
        const item = await creatCard(request.body);
        return response.send(item);
    } catch (err) {
        handleHttp(response, 'SAVE_ITEM', err.message);
    }
};

export const deleteItem = async (request: Request, response: Response) => {
    try {
        const {id} = request.params;
        const card = await deleteCard(id);
        return response.status(200).send(card);
    } catch (err) {
        handleHttp(response, 'DELETE_ITEM');
    }
};
