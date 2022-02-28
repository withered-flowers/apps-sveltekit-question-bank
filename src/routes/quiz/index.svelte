<script>
	import NavBar from '$lib/components/NavBar.svelte';
	import QuizHeader from '$lib/components/QuizHeader.svelte';
	import QuizCard from '$lib/components/QuizCard.svelte';
	import QuizList from '$lib/components/QuizList.svelte';
</script>

<NavBar />

<QuizHeader />
<div class="flex flex-col md:flex-row-reverse">
	<QuizList />
	<div class="grow">
		<QuizCard />
	</div>
</div>
