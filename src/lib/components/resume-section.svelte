<section class="resume-section">
	<h1 class="title">
		<slot name="title" />
	</h1>

	<slot name="content" />
</section>

<style>
	.resume-section {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		margin-bottom: 2.5rem;
		width: 100%;
		max-width: 800px;
	}

	.title {
		margin: 0 0 1rem 0;		
		margin-bottom: 2rem;
	}

	.title::after {
		content: '';
		display: block;
		width: 100%;
		height: 1px;
		background-color: var(--color-text-contrast);
		position: relative;
		top: 12px;
	}
</style>
