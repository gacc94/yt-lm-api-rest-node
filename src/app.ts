import "dotenv/config"
import express, {Application} from 'express';
import cors from 'cors';
import * as process from "process";


const PORT: string | number = process.env.PORT ?? 30001;

const app = express();
app.use(cors());

app.listen(PORT, () => {
    console.log('Server running on http://localhost:3002')
})

export class App {
    private app: Application;
    // private db: Database;
    // private userController: UserController;

    constructor() {
        this.app = express();
    }

    private configuration() {
        this.app.set('port', PORT ?? 3000);
    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server running on http://localhost:3002')
        })
    }

}

new App().start();