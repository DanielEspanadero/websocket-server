import express, { application, Application } from 'express';
import cors from 'cors';
import http from 'http';

class Server {

    private app: Application;
    private server: any;
    private io: any;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080';
        this.server = http.createServer(this.app);
        this.io = require('socket.io')(this.server);

        // Middlewares
        this.middlewares();

        // Rutas
        this.routes();

        // Sockets
        this.sockets();

        // Listen
        this.listen();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(express.static('public'));
    }

    routes() {

    }

    sockets() {
        this.io.on("connection", (socket: any) => {
            console.log('Cliente conectado');
            socket.disconnect();
        });
    };

    listen() {
        this.server.listen(this.port, () => {
            console.log(`Listenner on port ${this.port}`);
        });
    };
};

export default Server;