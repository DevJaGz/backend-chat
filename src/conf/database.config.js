import mongoose from 'mongoose';

export const DBConnection = async () => {
	try {
		await mongoose
			.connect('mongodb+srv://jgomez:%40abc12345@cluster0.omp6p1x.mongodb.net/chat-app-dev')
			.catch((e) => console.error(e));
		console.log('Database Online');
	} catch (error) {
		throw new Error(`Can not connect to Database:\n${JSON.stringify(error, null, 2)}`);
	}
};
