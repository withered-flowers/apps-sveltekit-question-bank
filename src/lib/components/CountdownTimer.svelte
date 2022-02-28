<script lang="ts">
	// Modified from
	// https://tailwindcomponents.com/component/countdown-timer
	import dayjs from 'dayjs';
	import { onMount, onDestroy } from 'svelte';

	export let duration: number = 120; // in minutes

	let timer = null;
	let now = dayjs().valueOf();
	let end = dayjs().add(duration, 'minute').valueOf();

	onMount(() => {
		timer = setInterval(() => {
			now = dayjs().valueOf();
			if (now >= end) {
				clearInterval(timer);
			}
		}, 1000);
	});

	onDestroy(() => {
		clearInterval(timer);
	});

	$: count = Math.round((end - now) / 1000);
	$: h = (Math.floor(count / 3600) % 24).toString().padStart(2, '0');
	$: m = (Math.floor(count / 60) % 60).toString().padStart(2, '0');
	$: s = (count % 60).toString().padStart(2, '0');
</script>

<div class="text-md w-full">
	<div
		class="mx-1 flex w-32 flex-row items-center justify-center gap-2 rounded bg-white py-2 text-slate-700"
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
				d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
		<div class="font-mono leading-none">
			<span>{h}:{m}:{s}</span>
		</div>
	</div>
</div>
<!-- <div>Hello</div> -->
