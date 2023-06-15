import {Router} from 'express';
import {readdirSync} from 'fs';

const PATH_ROUTER = `${__dirname}`;
const router = Router();


const cleanFileName = (fileName: string): string => fileName.split('.').shift();


/*
* =================================================
*           FUNCTION - ROUTER_DINAMIC
* ================================================*/
readdirSync(PATH_ROUTER).filter((fileName: string) => {
    const cleanName: string = cleanFileName(fileName);
    if (cleanName !== 'index') {
        import(`./${cleanName}`).then((moduleRouter) => {
            console.log(`Is loading the route ...../${cleanName}`);
            router.use(`/${cleanName}`, moduleRouter.router);
        })
    }
})


export default router;
