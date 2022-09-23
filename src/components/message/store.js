import { Message } from './model.js';

const addMessage = async (message) => {
	const DBMessage = new Message(message);
	await DBMessage.save().catch((e) => console.error(e));
};

const getMessages = () => DB_LIST;

export const add = addMessage;
export const list = getMessages;
