export const createError = (messageCode: string) => {
	let statusCode = 500;
	let headers = {
		'Content-Type': 'application/json'
	};
	let message = 'Internal Server Error';

	if (messageCode === 'INVALID_USERS') {
		statusCode = 404;
		headers = {
			'Content-Type': 'application/json'
		};
		message = 'Invalid username or password';
	}

	return {
		status: statusCode,
		headers,
		body: {
			message
		}
	};
};
