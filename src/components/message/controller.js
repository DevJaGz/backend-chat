import * as store from './store.js';

export const addMessage = (user, message) => {
	return new Promise((resolve, reject) => {
		if (!user || !message) {
			return reject(400);
		}
		const fullMessage = {
			user,
			message,
			date: new Date()
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
