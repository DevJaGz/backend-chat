import express from 'express';
import { defaultPORT } from './constants/defaults.constant.js';

const app = express();

app.use('/', (_, res) => {
	res.send('Works!');
});

/* -------------------------------------------------------------------------- */
/*                                 RUN SERVER                                 */
/* -------------------------------------------------------------------------- */
app.listen(defaultPORT, () => {
	console.log(`Server running on port ${String(defaultPORT)}...`);
});
