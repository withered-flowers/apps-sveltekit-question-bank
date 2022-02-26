<script>
	export let isAligned = true;
	export let isJustified = true;
</script>

<div
	class="min-h-[92vh] flex flex-col gap-4s"
	class:items-center={isAligned}
	class:justify-center={isJustified}
>
	<slot />
</div>
