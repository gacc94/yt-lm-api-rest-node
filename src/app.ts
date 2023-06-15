import "dotenv/config"
import express, {Application} from 'express';
import cors from 'cors';
import {router} from './routes';
import db from './config/mongo';

const PORT: string | number = process.env.PORT ?? 30001;
const app = express();
// dotenv.config();


/*
* =================================================
*                 MIDDLEWARES
* ================================================*/
app.use(cors());
app.use(express.json());
app.use(router);

/*
* =================================================
*                 CONNECTION - DB
* ================================================*/
db().then(()=>console.log('Conexion Ready'));
/*
* =================================================
*                 RUN - BOOTSTRAP
* ================================================*/
app.listen(PORT, () => {
    console.log('Server running on http://localhost:3002')
})







//
// export class App {
//     private app: Application;
//     // private db: Database;
//     // private userController: UserController;
//
//     constructor() {
//         this.app = express();
//     }
//
//     private configuration() {
//         this.app.set('port', PORT ?? 3000);
//     }
//
//     start() {
//         this.app.listen(this.app.get('port'), () => {
//             console.log('Server running on http://localhost:3002')
//         })
//     }
//
// }
//
// new App().start();