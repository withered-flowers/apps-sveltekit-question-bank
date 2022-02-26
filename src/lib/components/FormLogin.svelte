<form
	class=" bg-white rounded-xl shadow-md p-4 w-100 sm:w-1/2 md:w-[40%] md:max-w-md m-4"
	action="#"
>
	<div class="flex flex-col items-center mt-2 mb-4">
		<h1 class="text-3xl text-slate-700">Login Form</h1>
	</div>
	<div class="flex flex-col items-center m-4">
		<label for="username" class="text-xl mb-2 text-slate-700">Username</label>
		<input
			type="text"
			name="username"
			id="username"
			placeholder="Your Username"
			class="py-2 mb-4 px-4 rounded-full bg-slate-100 border-2 min-w-full hover:ring-1 active:ring-1"
		/>
	</div>
	<div class="flex flex-col items-center m-4">
		<label for="password" class="text-xl mb-2 text-slate-700">Password</label>
		<input
			type="password"
			name="password"
			id="password"
			placeholder="Your Password"
			class="py-2 mb-4 px-4 rounded-full bg-slate-100 border-2 min-w-full hover:ring-1 active:ring-1"
		/>
	</div>
	<div class="flex flex-col items-center mt-4 mb-2">
		<button
			type="submit"
			class="text-lg px-4 py-2 mb-2 bg-[#4285F4] text-white hover:bg-sky-600 hover:text-slate-200 hover:ring-1 transition duration-300 rounded-xl lg:w-48"
			>Login</button
		>
		<a
			href="/register"
			class="text-lg text-slate-700 underline hover:text-orange-700 transition duration-300"
			>or... wanna Register?</a
		>
	</div>
</form>
