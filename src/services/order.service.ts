import {ICar} from "../interfaces/car.interface";
import {ItemModel} from "../models/item.model";

export const getCards = () => ItemModel.find();