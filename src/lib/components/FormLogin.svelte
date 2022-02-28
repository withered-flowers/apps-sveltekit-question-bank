<form
	class=" w-100 m-4 rounded-xl bg-white p-4 shadow-md sm:w-1/2 md:w-[40%] md:max-w-md"
	method="post"
	action="/apis/login"
>
	<div class="mt-2 mb-4 flex flex-col items-center">
		<h1 class="text-3xl text-slate-700">Login Form</h1>
	</div>
	<div class="m-4 flex flex-col items-center">
		<label for="username" class="mb-2 text-xl text-slate-700">Username</label>
		<input
			type="text"
			name="username"
			id="username"
			placeholder="Your Username"
			class="mb-4 min-w-full rounded-full border-2 bg-slate-100 py-2 px-4 hover:ring-1 active:ring-1"
		/>
	</div>
	<div class="m-4 flex flex-col items-center">
		<label for="password" class="mb-2 text-xl text-slate-700">Password</label>
		<input
			type="password"
			name="password"
			id="password"
			placeholder="Your Password"
			class="mb-4 min-w-full rounded-full border-2 bg-slate-100 py-2 px-4 hover:ring-1 active:ring-1"
		/>
	</div>
	<div class="mt-4 mb-2 flex flex-col items-center">
		<button
			type="submit"
			class="mb-2 rounded-xl bg-[#4285F4] px-4 py-2 text-lg text-white transition duration-300 hover:bg-sky-600 hover:text-slate-200 hover:ring-1 lg:w-48"
			>Login</button
		>
		<a
			href="/register"
			class="text-lg text-slate-700 underline transition duration-300 hover:text-orange-700"
			>or... wanna Register?</a
		>
	</div>
</form>
