import express from 'express';
import { response } from '../../network/response.js';
import * as controllers from './controller.js';

export const messageRouter = express.Router();

messageRouter.get('/', async function (req, res) {
	const msg = await controllers
		.getMessages()
		.catch((error) => response.error(req, res, error, 500, '<GET-MESSAGES> Can not return the messages'));
	response.sucess(req, res, msg, 200);
});

messageRouter.post('/', async function (req, res) {
	const msg = await controllers
		.addMessage(req.body?.user, req.body?.message)
		.catch((code) =>
			response.error(
				req,
				res,
				'The user or the message is missing',
				code,
				'<ADD-MESSAGE> There is no user or message in the request'
			)
		);
	response.sucess(req, res, msg, 201);
});

messageRouter.patch('/:id', async function (req, res) {
	const msg = await controllers
		.updateMessage(req)
		.catch((code) => response.error(req, res, 'id is missing', code, '<UPDATE-MESSAGE> id is missing'));
	response.sucess(req, res, msg, 200);
});
