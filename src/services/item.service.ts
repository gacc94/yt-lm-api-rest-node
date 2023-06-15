import {ICar} from "../interfaces/car.interface";
import {ItemModel} from "../models/item.model";

export const creatCard = (item: ICar) =>  ItemModel.create(item);
export const getCards = () => ItemModel.find();
export const getCard = (id: string) => ItemModel.findById(id);
export const updateCard = (id: string, card: ICar) =>
    ItemModel.findOneAndUpdate({_id: id}, card, {new: true});
export const deleteCard = (id: string) => ItemModel.deleteOne({_id: id});