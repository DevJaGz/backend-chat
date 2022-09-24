import { model, Schema } from 'mongoose';
import { CHAT_SCHEMA_NAME } from '../chat/model.js';
import { USER_SCHEMA_NAME } from '../user/model.js';

const messageSchema = new Schema({
	chat: {
		type: Schema.ObjectId,
		ref: CHAT_SCHEMA_NAME
	},
	user: {
		type: Schema.ObjectId,
		ref: USER_SCHEMA_NAME
	},
	message: {
		type: String,
		required: true
	},
	date: {
		type: String,
		required: true
	}
});
messageSchema.method('toJSON', function () {
	const { __v, _id, ...message } = this.toObject();
	message.uid = _id;
	return message;
});
export const MESSAGE_SCHEMA_NAME = 'Message';
export const Message = model(MESSAGE_SCHEMA_NAME, messageSchema);
