import { defaultPORT } from '../../constants/defaults.constant.js';
import * as store from './store.js';

export const addMessage = (chat, user, message, file) => {
	return new Promise((resolve, reject) => {
		if (!chat || !user || !message) {
			return reject(400);
		}

		let fileUrl = '';
		if (file) {
			fileUrl = `http://localhost:${defaultPORT}/files/${file.filename}`;
		}
		console.log(fileUrl);
		const fullMessage = {
			chat,
			user,
			message,
			date: new Date(),
			file: fileUrl
		};
		store.add(fullMessage);
		resolve(fullMessage);
	});
};

export const getMessages = (req) => {
	const filterUser = req.query.user || null;
	return new Promise((resolve) => {
		const messages = store.list(filterUser);
		resolve(messages);
	});
};

export const updateMessage = (req) => {
	return new Promise(async (resolve, reject) => {
		const id = req.params.id;
		if (!id) reject(400);
		const message = await store.get(id).catch(console.error);
		if (!message) reject(400);
		const messageObj = message.toObject();
		const { user: newUser, message: newMessage } = req.body;
		const fullMessage = {
			user: newUser ? newUser : messageObj.user,
			message: newMessage ? newMessage : messageObj.message,
			date: new Date()
		};
		const messageUpdated = await store.update(id, fullMessage).catch(console.error);
		if (!messageUpdated) reject(500);
		resolve(fullMessage);
	});
};

export const deleteMessage = (req) => {
	return new Promise(async (resolve, reject) => {
		const id = req.params.id;
		if (!id) reject(400);
		const messageDeleted = await store.del(id);
		if (messageDeleted.deletedCount === 0) reject(400);
		resolve(id);
	});
};
