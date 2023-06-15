import {Request, Response, Router} from 'express';
import {login, register} from "../controllers/auth.controller";

const router: Router = Router();

router.post('/register', register);
router.post('/login',  login);

export {router};
