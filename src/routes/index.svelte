<script>
	import NavBar from '$lib/components/NavBar.svelte';
	import ContentLayout from '$lib/layouts/ContentLayout.svelte';
	import HomeBanner from '$lib/components/HomeBanner.svelte';
	import HomeSearch from '$lib/components/HomeSearch.svelte';
</script>

<NavBar />

<ContentLayout isAligned={false} isJustified={false}>
	<HomeBanner />
	<div class="-mt-10">
		<HomeSearch />
	</div>
</ContentLayout>
