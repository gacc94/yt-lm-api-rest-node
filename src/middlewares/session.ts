import {NextFunction, Request, Response} from "express";
import {verifyToken} from "../utils/jwt.handle";

export const checkJwt = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const jwtByUser = request.headers.authorization ?? '';
        const jwt = jwtByUser.split(' ').pop();
        const user = verifyToken(jwt);
        if (!user) {
            return response.status(401).send('NO_ TIENES_UN_JWT_VALIDO');
        }
        console.log({user, jwtByUser});
        next();
    } catch (err) {
        console.log(err.message);
        response.status(400);
        response.send('SESSION_NO_VALIDA');
    }
}

