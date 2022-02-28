<script>
	export let imgUrl = 'https://placekitten.com/140';
</script>

<div class="mx-4 mb-4 flex flex-col gap-4 rounded-xl border bg-white px-8 py-8 shadow-md">
	<div class="flex flex-row items-start justify-between">
		<div class="flex flex-row gap-4">
			<img src={imgUrl} alt="placeholder" class="w-24 rounded-full" />
			<div>
				<div class="text-2xl font-semibold text-slate-700">TrainingName</div>
				<div class="text-md font-semibold text-slate-700">TrainingProvider</div>
			</div>
		</div>
		<div class="rounded-full border border-[#34A853] px-4 py-2 text-sm text-slate-700">
			TrainingStatus
		</div>
	</div>

	<div>
		<div class="text-slate-700">
			<span>QuizTime:</span>
			<span>xx xx xxxx - xx xx xxxx</span>
		</div>
		<div class="text-slate-700">
			<span>QuizLocation:</span>
			<span>Online</span>
		</div>
	</div>

	<div>
		<button
			class="mb-4 min-w-full rounded-full bg-[#4285F4] px-4 py-2 text-slate-200 transition duration-300 hover:bg-[#0059c1]"
			>Go to Quiz</button
		>
		<button
			class="min-w-full rounded-full bg-[#4285F4] px-4 py-2 text-slate-200 transition duration-300 hover:bg-[#0059c1]"
			>See Result</button
		>
	</div>
</div>
