<script lang="ts">
	export let isAligned: Boolean = true;
	export let isJustified: Boolean = true;
</script>

<div
	class="gap-4s flex min-h-[92vh] flex-col"
	class:items-center={isAligned}
	class:justify-center={isJustified}
>
	<slot />
</div>
