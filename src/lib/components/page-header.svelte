<script>
	import PageHeaderMenuButton from '$lib/components/page-header-menu-button.svelte';
	import Avatar from '$lib/components/avatar.svelte';
</script>

<header class="page-header">
	<div class="page-title">
		<h1 class="name">John Gallego</h1>
		<h2 class="job-title">Full-Stack Engineer</h2>
	</div>

	<PageHeaderMenuButton />
</header>

<style>
	.page-header {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding: 1rem 1rem;
		width: 100%;
		background-color: var(--color-hg-header);
	}

	.page-header > :global(.page-header-avatar) {
		flex: 0 0 auto;
		margin-right: 1.5rem;
	}

	.page-title {
		flex: 1 1 auto;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.name,
	.job-title {
		margin: 0;
	}

	.name {
		font-size: 1.2rem;
		font-weight: 300;
		text-decoration: underline;
		text-underline-offset: 0.3rem;
	}

	.job-title {
		margin-top: 0.5em;
		font-size: 1rem;
		font-weight: 200;
	}
</style>
