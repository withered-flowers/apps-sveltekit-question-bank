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

<div class="text-md flex w-full items-center justify-center text-center">
	<div class="mx-1 w-24 rounded bg-white py-2 text-orange-700">
		<div class="font-mono leading-none">{h}:{m}:{s}</div>
	</div>
</div>
<!-- <div>Hello</div> -->
