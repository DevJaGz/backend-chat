import mongoose from 'mongoose';
import { config } from '../constants/config.constant.js';

export const DBConnection = async () => {
	try {
		await mongoose.connect(config.BD_URL).catch((e) => console.error(e));
		console.log('Database Online');
	} catch (error) {
		throw new Error(`Can not connect to Database:\n${JSON.stringify(error, null, 2)}`);
	}
};
