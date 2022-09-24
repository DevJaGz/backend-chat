import * as store from './store.js';

export const addChat = (users) => {
	return new Promise((resolve, reject) => {
		if (!users) return reject(400);
		const fullChat = {
			users,
			date: new Date()
		};
		store.add(fullChat);
		resolve(fullChat);
	});
};
export const getChats = (userId) => {
	return new Promise((resolve, reject) => {
		if (!userId) return reject(400);
		const chats = store.list(userId);
		resolve(chats);
	});
};
