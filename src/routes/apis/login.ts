import { getDbInstance } from '$lib/providers/db';
import { createError } from '$lib/utils/error';
import { compareHashWithPlaintext } from '$lib/utils/hashing';
import { signPayload } from '$lib/utils/jwt';
import type { User } from '@prisma/client';

const db = getDbInstance();

export async function post({ request }) {
	try {
		const formData: FormData = await request.formData();

		const objUser: LoginInput = {
			username: formData.get('username').toString(),
			password: formData.get('password').toString()
		};

		const user: User = await db.user.findUnique({
			where: {
				username: objUser.username
			}
		});

		const isHashMatch: boolean = await compareHashWithPlaintext(user.password, objUser.password);

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
