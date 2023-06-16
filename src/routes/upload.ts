import {Router} from "express";
import * as multer from "multer";
import multerMiddleware from "../middlewares/file";
import {getFile} from "../controllers/file.controller";

const router: Router = Router();


router.post('', multerMiddleware.single('myfile'), getFile);

export {router}

