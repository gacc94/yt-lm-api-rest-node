import {Schema, Types, model, Model} from 'mongoose';
import {ICar} from "../interfaces/car.interface";

/*
* =================================================
*                   SCHEMA - ITEM
* ================================================*/
const ItemSchema: Schema<ICar> = new Schema<ICar>(
    {
        color: {
            type: String,
            required: true,
        },
        gas: {
            type: String,
            required: true,
            enum: ['gasoline', 'electric'],
        },
        year: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
)
/*
* =================================================
*                   MODEL - ITEM
* ================================================*/
export const ItemModel: Model<ICar> = model('items', ItemSchema);
