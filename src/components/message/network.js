import express from 'express';
import { response } from '../../network/response.js';
import * as controllers from './controller.js';

export const messageRouter = express.Router();

messageRouter.get('/', function (req, res) {
	response.sucess(req, res, 'Works!');
});

messageRouter.post('/', async function (req, res) {
	const message = await controllers
		.addMessage(req.body.user, req.body.message)
		.catch((code) =>
			response.error(
				req,
				res,
				'The user or the message is missing',
				code,
				'<ADD-MESSAGE> There is no user or message in the request'
			)
		);
	response.sucess(req, res, message);
});
