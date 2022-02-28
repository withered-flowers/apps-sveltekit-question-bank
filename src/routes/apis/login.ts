import { getDbInstance } from '$lib/providers/db';
import { createError } from '$lib/utils/error';
import { compareHashWithPlaintext } from '$lib/utils/hashing';
import { signPayload } from '$lib/utils/jwt';

const db = getDbInstance();

export async function post({ request }) {
	try {
		const formData = await request.formData();

		const objUser: LoginInput = {
			username: formData.get('username'),
			password: formData.get('password')
		};

		const user = await db.user.findUnique({
			where: {
				username: objUser.username
			}
		});

		const isHashMatch = await compareHashWithPlaintext(user.password, objUser.password);

		const token: string = signPayload({
			id: user.id,
			username: user.username
		});

		if (!isHashMatch) {
			return createError('INVALID_USERS');
		} else {
			return {
				status: 200,
				headers: {
					'Content-Type': 'application/json'
				},
				body: {
					token
				}
			};
		}
	} catch (error) {
		console.log(error);
	}
}
