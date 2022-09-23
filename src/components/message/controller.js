export const addMessage = (user, message) => {
	return new Promise((resolve, reject) => {
		if (!user || !message) {
			return reject(400);
		}
		const fullMessage = {
			user,
			message,
			date: new Date()
		};
		resolve(fullMessage);
	});
};
