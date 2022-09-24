import { model, Schema } from 'mongoose';
import { USER_SCHEMA_NAME } from '../user/model.js';

const chatSchema = new Schema({
	users: [
		{
			type: Schema.ObjectId,
			ref: USER_SCHEMA_NAME
		}
	]
});

chatSchema.method('toJSON', function () {
	const { __v, _id, ...chat } = this.toObject();
	chat.uid = _id;
	return chat;
});
export const CHAT_SCHEMA_NAME = 'Chat';
export const Chat = model(CHAT_SCHEMA_NAME, chatSchema);
