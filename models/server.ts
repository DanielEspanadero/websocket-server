import express, { Application } from 'express';
import cors from 'cors';

class Server {

    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080';

        this.middlewares();
        this.routes();
        this.listen();
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
    }
    
    routes() {

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listenner on port ${this.port}`);
        });
    };
};

export default Server;