import {sign, verify} from "jsonwebtoken";
import * as process from "process";
const JWT_SECRET = process.env.JWT_SECRET ?? 'token.011212';

export const generateToken = (id: string) => {
    return  sign({id}, JWT_SECRET,
        {algorithm: 'HS256', expiresIn: '2h'},
    );
}

export const verifyToken = (jwt: string) => verify(jwt, JWT_SECRET);
