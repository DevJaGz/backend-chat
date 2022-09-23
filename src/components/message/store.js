const list = [];

const addMessage = (message) => {
	list.push(message);
};

const getMessages = () => list;

export const add = addMessage;
export const get = getMessages;
