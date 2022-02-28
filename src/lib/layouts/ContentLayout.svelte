<script lang="ts">
	export let isAligned = true;
	export let isJustified = true;
</script>

<div
	class="gap-4s flex min-h-[92vh] flex-col"
	class:items-center={isAligned}
	class:justify-center={isJustified}
>
	<slot />
</div>
