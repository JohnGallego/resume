<script lang="ts">
	export let accomplishments: string[] = [];
</script>

<div class="work-experience">
	<header>
		<div class="title-company">
			<h2 class="title">
				<slot name="title" />
			</h2>

			<h3 class="company">
				<slot name="company" />
			</h3>
		</div>

		<div class="date-location">
			<span class="date">
				<i
					class="fa-duotone fa-calendar-days fa-sm"
					style="--fa-primary-color: #41576c; --fa-secondary-color: #9b8676; --fa-secondary-opacity: 1;"
				/>

				<slot name="date" />
			</span>

			<span class="location">
				<i
					class="fa-duotone fa-location-dot fa-sm"
					style="--fa-primary-color: #41576c; --fa-secondary-color: #9b8676; --fa-secondary-opacity: 1;"
				/>

				<slot name="location" />
			</span>
		</div>
	</header>

	<ul>
		{#each accomplishments as accomplishment}
			<li>{accomplishment}</li>
		{/each}
	</ul>
</div>

<style>
	.work-experience {
		margin-bottom: 2rem;
	}

	header {
		display: flex;
		margin-bottom: 1.5rem;
	}

	.title-company {
		flex: 1 1 auto;
		display: flex;
		flex-direction: column;
	}

	.date-location {
		flex: 0 0 auto;
		display: flex;
		flex-direction: column;
	}

	.company {
		flex: 1 1 auto;
		margin: 0;
		font-size: 0.9rem;
		color: var(--color-text-contrast);
	}

	.date {
		margin-bottom: 0.25rem;
		font-size: 0.9rem;
	}

	ul {
		margin: 0;
		padding: 0 1.5rem 0 2rem;
	}

	li {
		margin-bottom: 1rem;
		font-size: 0.9rem;
	}
</style>
