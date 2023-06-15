import {Request, Response, Router} from 'express';
import {deleteItem, getItem, getItems, saveItem, updateItem} from "../controllers/item.controller";
import {logMiddleware} from "../middlewares/log";

const router = Router();

router.get('', logMiddleware, getItems);
router.get('/:id',  getItem);
router.post('', saveItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);


export {router};