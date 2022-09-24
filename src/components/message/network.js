import express from 'express';
import multer from 'multer';
import { response } from '../../network/response.js';
import * as controllers from './controller.js';

export const messageRouter = express.Router();
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'public/files/');
	},
	filename: function (req, file, cb) {
		const fileType = file?.mimetype;
		const fileTypeSplitted = fileType.split('/');
		const fileExtension = fileTypeSplitted[fileTypeSplitted.length - 1];
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
		cb(null, file.fieldname + '-' + uniqueSuffix + '.' + fileExtension);
	}
});
const upload = multer({
	storage
});
messageRouter.get('/', async function (req, res) {
	const msg = await controllers
		.getMessages(req)
		.catch((error) => response.error(req, res, error, 500, '<GET-MESSAGES> Can not return the messages'));
	response.sucess(req, res, msg, 200);
});

messageRouter.post('/', upload.single('file'), async function (req, res) {
	const msg = await controllers
		.addMessage(req.body.chat, req.body?.user, req.body?.message, req.file)
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

messageRouter.delete('/:id', async function (req, res) {
	const msg = await controllers
		.deleteMessage(req)
		.catch((code) => response.error(req, res, 'id is missing', code, '<DELETE-MESSAGE> id is missing'));
	response.sucess(req, res, msg, 200);
});
