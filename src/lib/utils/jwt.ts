import * as jwt from 'jsonwebtoken';
const secretKey = 'thisisnotsafeatall!';

export const signPayload = (payload: jwt.JwtPayload | string): string => {
	const token = jwt.sign(payload, secretKey, {
		expiresIn: '1h'
	});
	return token;
};

export const decodeToken = (token: string): jwt.JwtPayload | string => {
	const decodedToken = jwt.verify(token, secretKey);
	return decodedToken;
};
