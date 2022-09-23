const DB_LIST = [];

const addMessage = (message) => {
	DB_LIST.push(message);
};

const getMessages = () => DB_LIST;

export const add = addMessage;
export const list = getMessages;
