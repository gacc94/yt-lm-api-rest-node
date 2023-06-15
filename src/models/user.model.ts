import {Schema, Types, model, Model} from 'mongoose';
import {ICar} from "../interfaces/car.interface";
import {IUser} from "../interfaces/user.interface";

/*
* =================================================
*                   SCHEMA - USER
* ================================================*/
const UserSchema: Schema<IUser> = new Schema<IUser>(
    {
        name: {type: String, required: true},
        password: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        description: {type: String, default: 'Hello'}
    },
    {
        timestamps: true,
        versionKey: false,
    }
)
/*
* =================================================
*                   MODEL - USER
* ================================================*/
export const UserModel: Model<IUser> = model('users', UserSchema);
