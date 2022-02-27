<script>
	import CountdownTimer from './CountdownTimer.svelte';
</script>

<div class="m-4 flex flex-row items-center justify-between">
	<div>
		<!-- <span class="text-slate-700">QuizType</span> -->
		<!-- TODO set the name of the quiz -->
		<span class="text-slate-700">QuizName</span>
	</div>
	<div class="flex flex-row items-center gap-2">
		<span class="text-slate-700">(Icon)</span>
		<span class="text-slate-700">HelpButton</span>
		<span><CountdownTimer /></span>
	</div>
</div>
