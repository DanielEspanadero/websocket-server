"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8080';
        this.server = http_1.default.createServer(this.app);
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
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.static('public'));
    }
    routes() {
    }
    sockets() {
        this.io.on("connection", (socket) => {
            console.log('Cliente conectado', socket.id);
            socket.on('disconnect', () => {
                console.log('cliente desconectado');
            });
        });
    }
    ;
    listen() {
        this.server.listen(this.port, () => {
            console.log(`Listenner on port ${this.port}`);
        });
    }
    ;
}
;
exports.default = Server;
//# sourceMappingURL=server.js.map