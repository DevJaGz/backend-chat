import { User } from './model.js';

const addUser = async (name) => {
	const DBUser = new User(name);
	await DBUser.save().catch((e) => console.error(e));
};

export const add = addUser;
