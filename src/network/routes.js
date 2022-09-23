import { messageRouter } from '../components/message/network.js';

export const routes = (server) => {
	server.use('/api/message', messageRouter);
};
