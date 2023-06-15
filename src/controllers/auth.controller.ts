import {Request, Response} from "express";
import {handleHttp} from "../utils/error.handle";
import {loginUser, registerUser} from "../services/auth.service";

export const register = async (request: Request, response: Response) => {
    try {
        const authUser = await registerUser(request.body);
        return response.status(200).send(authUser);
    } catch (err) {
        console.log(err);
        return handleHttp(response, 'REGISTER_USER');
    }
}
export const login = async (request: Request, response: Response) => {
    try {
        const {email, password} = request.body;
        const authUser = await loginUser({email, password});
        if(authUser === 'NOT_FOUND') return response.status(403).send(authUser).json().end();
        return response.status(200).send(authUser).json();
    } catch (err) {
        console.log(err);
        return handleHttp(response, 'REGISTER_USER');
    }
}