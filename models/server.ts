import express, { Application } from 'express';

class Server {

    private app: Application;
    private port: string;


    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080';

        this.routes();
        this.listen();
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