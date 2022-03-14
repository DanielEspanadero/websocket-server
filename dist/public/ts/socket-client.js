"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_client_1 = require("socket.io-client");
(() => {
    window.addEventListener('load', () => {
        const socket = (0, socket_io_client_1.io)();
    });
})();
//# sourceMappingURL=socket-client.js.map