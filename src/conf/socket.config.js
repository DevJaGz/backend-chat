import { Server } from 'socket.io';

export const socket = {
	io: null,
	connect(server) {
		this.io = new Server(server);
	}
};
