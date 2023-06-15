import {Request, Response, Router} from 'express';
import {getOrders} from "../controllers/order.controller";
import {checkJwt} from "../middlewares/session";

/*
* Esta ruta solo es valida para ususarios que tiene sesion activa!
* que tenga un JWT valido!
 */
const router = Router();

router.get('', checkJwt, getOrders);
export {router};