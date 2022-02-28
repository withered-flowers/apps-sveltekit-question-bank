/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#the-app-namespace
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}

type RegisterInput = {
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	password: string;
};

type LoginInput = {
	username: string;
	password: string;
};

type HashedInput = {
	userId: number;
	hash: string;
};
