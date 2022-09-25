import cors from 'cors';
import express from 'express';
import http from 'http';
import { DBConnection } from './conf/database.config.js';
import { socket } from './conf/socket.config.js';
import { config } from './constants/config.constant.js';
import { routes } from './network/routes.js';
const app = express();
const server = http.Server(app);
socket.connect(server);
DBConnection(); // Set Database Connection
/* -------------------------------------------------------------------------- */
/*                                 MIDELWARES                                 */
/* -------------------------------------------------------------------------- */
app.use(express.static('public')); // Serve static files
app.use(express.json()); // Read and Parse Body
app.use(cors()); // Enable cors for all connections
/* --------------------------------- ROUTES --------------------------------- */
routes(app); // Set App Routes

/* -------------------------------------------------------------------------- */
/*                                 RUN SERVER                                 */
/* -------------------------------------------------------------------------- */
server.listen(config.PORT, () => {
	console.log(`Server running on port ${String(config.PORT)}...`);
});
