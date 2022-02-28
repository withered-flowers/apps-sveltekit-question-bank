import * as jwt from 'jsonwebtoken';
let secretKey: string = 'thisisnotsafeatall!';

export const signPayload = (payload: any): string => {
	const token = jwt.sign(payload, secretKey, {
		expiresIn: '1h'
	});
	return token;
};

export const decodeToken = (token: string): any => {
	const decodedToken = jwt.verify(token, secretKey);
	return decodedToken;
};
