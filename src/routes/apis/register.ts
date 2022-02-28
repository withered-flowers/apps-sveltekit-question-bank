import { getDbInstance } from '$lib/providers/db';
import { hashPlaintext } from '$lib/utils/hashing';

const db = getDbInstance();

export async function post({ request }) {
	try {
		const formData = await request.formData();

		const objUser: RegisterInput = {
			username: formData.get('username'),
			email: formData.get('email'),
			firstName: formData.get('firstName'),
			lastName: formData.get('lastName'),
			password: hashPlaintext(formData.get('password'))
		};

		const newUser = await db.user.create({
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
