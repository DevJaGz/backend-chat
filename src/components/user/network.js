import express from 'express';
import { response } from '../../network/response.js';
import * as controllers from './controller.js';

export const userRouter = express.Router();

userRouter.post('/', async function (req, res) {
	const msg = await controllers
		.addUser(req.body.name)
		.catch((error) => response.error(req, res, error, 400, '<ADD-USER> name is missing'));
	response.sucess(req, res, msg, 200);
});

userRouter.get('/', async function (req, res) {
	const msg = await controllers.getUser().catch((error) => response.error(req, res, error, 500, '<GET-USERS> ?'));
	response.sucess(req, res, msg, 200);
});
