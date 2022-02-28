<script>
	import CountdownTimer from './CountdownTimer.svelte';
</script>

<div class="m-4 flex flex-row items-center justify-between">
	<div>
		<!-- <span class="text-slate-700">QuizType</span> -->
		<!-- TODO set the name of the quiz -->
		<span class="text-xl font-semibold text-slate-700">QuizName</span>
	</div>
	<div class="flex flex-row items-center gap-2">
		<!-- <span class="text-slate-700">(Icon)</span> -->
		<button
			class="hover:bg-amber-00 flex flex-row items-center justify-center gap-1 rounded bg-yellow-300 px-4 py-2 text-slate-700 transition duration-300 hover:bg-amber-400 hover:fill-slate-200 hover:text-slate-50"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
				/>
			</svg>
			Help
		</button>
		<span><CountdownTimer /></span>
	</div>
</div>
