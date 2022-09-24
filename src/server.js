import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { DBConnection } from './conf/database.config.js';
import { defaultPORT } from './constants/defaults.constant.js';
import { routes } from './network/routes.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const server = express(); // Create server
DBConnection(); // Set Database Connection
/* -------------------------------------------------------------------------- */
/*                                 MIDELWARES                                 */
/* -------------------------------------------------------------------------- */
server.use(express.static('public')); // Serve static files
server.use(express.json()); // Read and Parse Body
/* --------------------------------- ROUTES --------------------------------- */
routes(server); // Set App Routes

/* -------------------------------------------------------------------------- */
/*                                 RUN SERVER                                 */
/* -------------------------------------------------------------------------- */
server.listen(defaultPORT, () => {
	console.log(`Server running on port ${String(defaultPORT)}...`);
});
