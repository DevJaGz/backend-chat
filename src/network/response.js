export const response = {
	sucess(req, res, msg, code) {
		res.status(code || 200).send({
			error: '',
			body: msg
		});
	},
	error(req, res, msg, code, details) {
		console.error(`[RESPONSE-ERROR] ${String(details)}`);
		res.status(code || 500).send({
			error: msg,
			body: null
		});
	}
};
