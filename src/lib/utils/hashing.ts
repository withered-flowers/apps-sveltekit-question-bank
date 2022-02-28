import { pbkdf2Sync, randomBytes } from 'crypto';

export const hashPlaintext = (plaintext: string): string => {
	const salt = randomBytes(32).toString('hex');
	const hash = pbkdf2Sync(plaintext, salt, 100, 64, 'sha512').toString('hex');

	return `${salt}$${hash}`;
};

export const compareHashWithPlaintext = (hashFromDb: string, plaintext: string): boolean => {
	const hashFromPlaintext = pbkdf2Sync(
		plaintext,
		hashFromDb.split('$')[0],
		100,
		64,
		'sha512'
	).toString('hex');

	return hashFromPlaintext === hashFromDb.split('$')[1];
};
