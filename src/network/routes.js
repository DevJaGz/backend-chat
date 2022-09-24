import { messageRouter } from '../components/message/network.js';
import { userRouter } from '../components/user/network.js';

export const routes = (server) => {
	server.use('/api/message', messageRouter);
	server.use('/api/user', userRouter);
};
