<form
	class="w-100 m-4 rounded-xl bg-white p-4 shadow-md sm:w-1/2 md:max-w-md lg:w-[55%] lg:min-w-[55%] lg:max-w-[55%]"
	action="#"
>
	<div class="mt-2 mb-4 flex flex-col items-center">
		<h1 class="text-3xl text-slate-700">Register Form</h1>
	</div>
	<div class="flex flex-col justify-center lg:flex-row">
		<div class="m-4 flex flex-col items-center lg:mx-2 lg:w-1/2">
			<label for="firstName" class="mb-2 text-xl text-slate-700">First Name</label>
			<input
				type="text"
				name="first-name"
				id="firstName"
				placeholder="First Name"
				class="min-w-full rounded-full border-2 bg-slate-100 py-2 px-4 hover:ring-1 active:ring-1"
			/>
		</div>
		<div class="m-4 flex flex-col items-center lg:mx-2 lg:w-1/2">
			<label for="lastName" class="mb-2 text-xl text-slate-700">Last Name</label>
			<input
				type="text"
				name="last-name"
				id="lastName"
				placeholder="Last Name"
				class="min-w-full rounded-full border-2 bg-slate-100 py-2 px-4 hover:ring-1 active:ring-1"
			/>
		</div>
	</div>
	<div class="flex flex-col justify-center">
		<div class="m-4 flex flex-col items-center lg:m-2">
			<label for="email" class="mb-2 text-xl text-slate-700">Email</label>
			<input
				type="email"
				name="email"
				id="email"
				placeholder="Your Email Address"
				class="min-w-full rounded-full border-2 bg-slate-100 py-2 px-4 hover:ring-1 active:ring-1 lg:w-[31rem]"
			/>
		</div>
		<div class="m-4 flex flex-col items-center lg:m-2">
			<label for="username" class="mb-2 text-xl text-slate-700">Username</label>
			<input
				type="text"
				name="username"
				id="username"
				placeholder="Your Username"
				class="min-w-full rounded-full border-2 bg-slate-100 py-2 px-4 hover:ring-1 active:ring-1 lg:w-[31rem]"
			/>
		</div>
	</div>
	<div class="flex flex-col justify-center lg:flex-row">
		<div class="m-4 flex flex-col items-center lg:mx-2 lg:w-1/2">
			<label for="password" class="mb-2 text-xl text-slate-700">Password</label>
			<input
				type="password"
				name="password"
				id="password"
				placeholder="Your Password"
				class="min-w-full rounded-full border-2 bg-slate-100 py-2 px-4 hover:ring-1 active:ring-1"
			/>
		</div>
		<div class="m-4 flex flex-col items-center lg:mx-2 lg:w-1/2">
			<label for="verifyPassword" class="mb-2 text-xl text-slate-700">Verify Password</label>
			<input
				type="password"
				name="verify-password"
				id="verifyPassword"
				placeholder="Verify Your Password"
				class="min-w-full rounded-full border-2 bg-slate-100 py-2 px-4 hover:ring-1 active:ring-1"
			/>
		</div>
	</div>
	<div class="mt-4 mb-2 flex flex-col items-center">
		<button
			type="submit"
			class="mb-2 rounded-xl bg-[#4285F4] px-4 py-2 text-lg text-white transition duration-300 hover:bg-sky-600 hover:text-slate-200 hover:ring-1 lg:w-48"
			>Register</button
		>
		<a
			href="/login"
			class="text-lg text-slate-700 underline transition duration-300 hover:text-orange-700"
			>or... back to Login?</a
		>
	</div>
</form>
