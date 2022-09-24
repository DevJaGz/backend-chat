import * as store from './store.js';

export const addUser = (name) => {
	return new Promise((resolve, reject) => {
		if (!name) return reject(400);
		const fullUser = {
			name,
			date: new Date()
		};
		store.add(fullUser);
		resolve(fullUser);
	});
};

export const getUser = () => {
	return new Promise((resolve) => {
		const users = store.list();
		resolve(users);
	});
};
