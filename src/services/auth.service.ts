import {UserModel} from "../models/user.model";
import {IUser} from "../interfaces/user.interface";
import {encrypt, verified} from "../utils/bcrypt.handle";
import {IAuth} from "../interfaces/auth.interface";
import {generateToken} from "../utils/jwt.handle";

export const registerUser = async (user: IUser) => {
    const {email, password, name} = user;
    const passHash = await encrypt(password);
    const checkIs = await UserModel.findOne({email})
    if(checkIs) return 'ALREADY_USER';

    return await UserModel.create({email, password: passHash, name,});

}
export const loginUser = async (user: IAuth) => {
    const {email, password} = user;
    const checkIs = await UserModel.findOne({email})
    if(!checkIs) return 'NOT_FOUND';

    const passHash = checkIs.password; //* Password Encrypt
    const isCorrect = await verified(password, passHash);

    if (!isCorrect) return 'PASSWORD_INCORRECT';
    const token = generateToken(checkIs.email);

    return {token, user: checkIs,}

}