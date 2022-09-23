import { model, Schema } from 'mongoose';

const messageSchema = new Schema({
	user: {
		type: String,
		required: true
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

export const Message = model('Message', messageSchema);
