import { Message } from './model.js';

const addMessage = async (message) => {
	const DBMessage = new Message(message);
	await DBMessage.save().catch((e) => console.error(e));
};

const getMessages = async (filterUser) => {
	let filter = {};
	if (filterUser != null) filter = { user: filterUser };
	return await Message.find(filter).catch(console.error);
};

const getMessageById = (id) => Message.findById(id);

const updateMessage = (id, message) => Message.updateOne({ id }, message);

export const add = addMessage;
export const list = getMessages;
export const get = getMessageById;
export const update = updateMessage;
