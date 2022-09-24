import { model, Schema } from 'mongoose';

const userSchema = new Schema({
	name: String
});

userSchema.method('toJSON', function () {
	const { __v, _id, ...user } = this.toObject();
	user.uid = _id;
	return user;
});
export const USER_SCHEMA_NAME = 'User';
export const User = model(USER_SCHEMA_NAME, userSchema);
