<script lang="ts">
	export let isAligned: Boolean = true;
	export let isJustified: Boolean = true;
</script>

<div
	class="min-h-[92vh] flex flex-col gap-4s"
	class:items-center={isAligned}
	class:justify-center={isJustified}
>
	<slot />
</div>
