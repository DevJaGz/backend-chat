import express from 'express';
import { DBConnection } from './conf/database.config.js';
import { defaultPORT } from './constants/defaults.constant.js';
import { routes } from './network/routes.js';

const server = express();
DBConnection();
/* -------------------------------------------------------------------------- */
/*                                 MIDELWARES                                 */
/* -------------------------------------------------------------------------- */
server.use(express.json()); // Read and Parse Body
/* --------------------------------- ROUTES --------------------------------- */
routes(server);

/* -------------------------------------------------------------------------- */
/*                                 RUN SERVER                                 */
/* -------------------------------------------------------------------------- */
server.listen(defaultPORT, () => {
	console.log(`Server running on port ${String(defaultPORT)}...`);
});
