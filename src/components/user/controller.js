import * as store from './store.js';

export const addUser = (name) => {
	return new Promise((resolve, reject) => {
		if (!name) reject(400);
		const fullUser = {
			name,
			date: new Date()
		};
		store.add(fullUser);
		resolve(fullUser);
	});
};
