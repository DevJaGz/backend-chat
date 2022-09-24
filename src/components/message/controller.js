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

export const getMessages = () => {
	return new Promise((resolve) => {
		const messages = store.list();
		resolve(messages);
	});
};

export const updateMessage = (req) => {
	return new Promise(async (resolve, reject) => {
		if (!req.params.id) reject(400);
		const message = await store.get(req.params.id).catch(console.error);
		if (!message) reject(400);

		resolve(message);
	});
};
