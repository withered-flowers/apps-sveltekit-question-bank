import { getDbInstance } from '$lib/providers/db';
import { hashPlaintext } from '$lib/utils/hashing';
import type { User } from '@prisma/client';

const db = getDbInstance();

export async function post({ request }) {
	try {
		const formData: FormData = await request.formData();

		const objUser: RegisterInput = {
			username: formData.get('username').toString(),
			email: formData.get('email').toString(),
			firstName: formData.get('first-name').toString(),
			lastName: formData.get('last-name').toString(),
			password: hashPlaintext(formData.get('password').toString())
		};

		const newUser: User = await db.user.create({
			data: objUser
		});

		return {
			status: 201,
			headers: {
				'Content-Type': 'application/json'
			},
			body: {
				message: 'User created successfully',
				user: {
					id: newUser.id,
					email: newUser.email
				}
			}
		};
	} catch (error) {
		console.log(error);
	}
}
