<script lang="ts">
	export let accomplishments: string[] = [];
</script>

<div class="work-experience">
	<header>
		<h2 class="title">
			<slot name="title" />
		</h2>

		<h3 class="company">
			<slot name="company" />
		</h3>

		<div class="info">
			<span class="date">
				<slot name="date" />
			</span>

			<span class="location">
				<slot name="location" />
			</span>
		</div>
	</header>
</div>

<ul>
	{#each accomplishments as accomplishment}
		<li>{accomplishment}</li>
	{/each}
</ul>

<style>
	header {
		display: flex;
	}
</style>
