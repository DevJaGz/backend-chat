import { chatRouter } from '../components/chat/network.js';
import { messageRouter } from '../components/message/network.js';
import { userRouter } from '../components/user/network.js';

export const routes = (server) => {
	server.use('/api/message', messageRouter);
	server.use('/api/user', userRouter);
	server.use('/api/chat', chatRouter);
};
