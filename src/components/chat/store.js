import { Chat } from './model.js';

const addChat = async (chat) => {
	const DBChat = new Chat(chat);
	await DBChat.save().catch((e) => console.error(e));
};

const getChats = (userId) => {
	return new Promise(async (resolve, reject) => {
		let filter = {};
		if (userId) {
			filter = { users: userId };
		}
		const chats = await Chat.find(filter).populate('users').catch(console.error);
		if (!chats) reject(400);
		resolve(chats);
	});
};

export const add = addChat;
export const list = getChats;
