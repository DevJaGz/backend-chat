import { User } from './model.js';

const addUser = async (name) => {
	const DBUser = new User(name);
	await DBUser.save().catch((e) => console.error(e));
};

const getUsers = async () => await User.find();

export const add = addUser;
export const list = getUsers;
