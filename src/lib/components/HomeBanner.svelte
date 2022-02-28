<script>
	import dayjs from 'dayjs';
	import utc from 'dayjs/plugin/utc';
	import { onMount, onDestroy } from 'svelte';

	dayjs.extend(utc);

	let timer = null;

	let hour = dayjs().hour().valueOf();
	let minute = dayjs().minute().valueOf();
	let second = dayjs().second().valueOf();

	onMount(() => {
		timer = setInterval(() => {
			hour = dayjs().hour().valueOf();
			minute = dayjs().minute().valueOf();
			second = dayjs().second().valueOf();
		}, 1000);
	});

	onDestroy(() => {
		clearInterval(timer);
	});

	$: h = hour.toString().padStart(2, '0');
	$: m = minute.toString().padStart(2, '0');
	$: s = second.toString().padStart(2, '0');
</script>

<div class="bg-[#4285F4] pl-[15px] pr-[15px]">
	<div class="pl-11-pr-11 mx-4 flex flex-col pt-[40px] pb-[45px]">
		<div
			class="flex flex-row items-center justify-between rounded-full border px-6 py-2 text-slate-200"
		>
			<div class="p-1　text-xl font-semibold">Training History</div>
			<div class="hidden p-1 sm:flex sm:flex-row sm:items-center sm:gap-1">
				<span class="mx-2">
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
				</span>
				<span>Saturday 26 Feb 2022 ,</span>
				<span class="text-md font-mono">{h}:{m}:{s}</span>
			</div>
		</div>
		<div class="mt-6 mb-6 text-3xl text-slate-200">Question Bank</div>
		<div class="text-slate-200">
			<span class="mr-4">(icon)</span>
			<span>Training History </span>
		</div>
	</div>
</div>
