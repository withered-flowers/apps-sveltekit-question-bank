<form
	class="bg-[#6BDA81] rounded-xl p-4 w-100 sm:w-1/2 lg:min-w-[55%] lg:max-w-[55%] lg:w-[55%] md:max-w-md m-4"
	action="#"
>
	<div class="flex flex-col items-center mt-2 mb-4">
		<h1 class="text-3xl text-slate-700">Register Form</h1>
	</div>
	<div class="flex flex-col justify-center lg:flex-row">
		<div class="flex flex-col items-center m-4">
			<label for="firstName" class="text-xl mb-2 text-slate-700">First Name</label>
			<input
				type="text"
				name="first-name"
				id="firstName"
				placeholder="First Name"
				class="px-4 py-2 rounded-xl text-slate-700 text-center"
			/>
		</div>
		<div class="flex flex-col items-center m-4">
			<label for="lastName" class="text-xl mb-2 text-slate-700">Last Name</label>
			<input
				type="text"
				name="last-name"
				id="lastName"
				placeholder="Last Name"
				class="px-4 py-2 rounded-xl text-slate-700 text-center"
			/>
		</div>
	</div>
	<div class="flex flex-col justify-center">
		<div class="flex flex-col items-center m-4 lg:m-2">
			<label for="email" class="text-xl mb-2 text-slate-700">Email</label>
			<input
				type="email"
				name="email"
				id="email"
				placeholder="Your Email Address"
				class="px-4 py-2 rounded-xl text-slate-700 text-center lg:w-[31rem]"
			/>
		</div>
		<div class="flex flex-col items-center m-4 lg:m-2">
			<label for="username" class="text-xl mb-2 text-slate-700">Username</label>
			<input
				type="text"
				name="username"
				id="username"
				placeholder="Your Username"
				class="px-4 py-2 rounded-xl text-slate-700 text-center lg:w-[31rem]"
			/>
		</div>
	</div>
	<div class="flex flex-col justify-center lg:flex-row">
		<div class="flex flex-col items-center m-4">
			<label for="password" class="text-xl mb-2 text-slate-700">Password</label>
			<input
				type="password"
				name="password"
				id="password"
				placeholder="Your Password"
				class="px-4 py-2 rounded-xl text-slate-700 text-center"
			/>
		</div>
		<div class="flex flex-col items-center m-4">
			<label for="verifyPassword" class="text-xl mb-2 text-slate-700">Verify Password</label>
			<input
				type="password"
				name="verify-password"
				id="verifyPassword"
				placeholder="Verify Your Password"
				class="px-4 py-2 rounded-xl text-slate-700 text-center"
			/>
		</div>
	</div>
	<div class="flex flex-col items-center mt-4 mb-2">
		<button
			type="submit"
			class="text-lg px-4 py-2 mb-2 bg-[#4285F4] text-white hover:bg-sky-600 hover:text-slate-200 hover:ring-1 transition duration-300 rounded-xl lg:w-48"
			>Register</button
		>
		<a
			href="/login"
			class="text-lg text-slate-700 underline hover:text-orange-700 transition duration-300"
			>or... back to Login?</a
		>
	</div>
</form>
