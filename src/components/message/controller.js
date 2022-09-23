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
		store.add(message);
		resolve(fullMessage);
	});
};

export const getMessages = () => {
	return new Promise((resolve) => {
		const messages = store.list();
		resolve(messages);
	});
};
