import express from 'express';
import { response } from '../../network/response.js';
import * as controllers from './controller.js';

export const chatRouter = express.Router();

chatRouter.post('/', async function (req, res) {
	const msg = await controllers
		.addChat(req.body.users)
		.catch((error) => response.error(req, res, error, 400, '<ADD-CHAT> chat is missing'));
	response.sucess(req, res, msg, 201);
});

chatRouter.get('/:userId', async function (req, res) {
	const msg = await controllers
		.getChats(req.params.userId)
		.catch((error) => response.error(req, res, error, 400, '<GET-CHATS> userId is missing'));
	response.sucess(req, res, msg, 200);
});
