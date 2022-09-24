import { Message } from './model.js';

const addMessage = async (message) => {
	const DBMessage = new Message(message);
	await DBMessage.save().catch((e) => console.error(e));
};

const getMessages = (filterUser) => {
	return new Promise(async (resolve, reject) => {
		let filter = {};
		if (filterUser != null) filter = { user: filterUser };
		const messages = await Message.find(filter).populate('user').catch(console.error);
		resolve(messages);
	});
};

const getMessageById = (id) => Message.findById(id);

const updateMessage = (id, message) => Message.updateOne({ _id: id }, message);

const deleteMessage = (id) => Message.deleteOne({ _id: id });
export const add = addMessage;
export const list = getMessages;
export const get = getMessageById;
export const update = updateMessage;
export const del = deleteMessage;
