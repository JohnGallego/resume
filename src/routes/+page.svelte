<script>
	import ResumeSection from '$lib/components/resume-section.svelte';
	import Skills from '$lib/components/skills.svelte';
</script>

<main>
	<div class="left-panel">
		<section class="contact">
			<b>Phone:</b> +1 (646) 791-3328
			<br />
			<b>Email:</b> johngallegodev@gmail.com
			<br />
			<b>Located:</b> Jersey City, NJ
		</section>

		<ResumeSection>
			<svelte:fragment slot="title">Professional Summary</svelte:fragment>

			<svelte:fragment slot="content">
				<p>
					As a seasoned Full Stack Engineer, I bring over a decade of hands-on experience, including
					8+ years in front-end development and 2+ years in back-end development. My expertise spans
					JavaScript/TypeScript, Node.js, PHP, Python, and C#, with a track record of creating and
					optimizing complex web applications for startups, enterprise-level corporations, and small
					businesses.
				</p>

				<p>
					I am seeking opportunities in forward-thinking organizations that foster creativity and
					challenge their employees, enabling continued learning and growth. I'm Passionate about
					translating business requirements into functional, user-friendly web solutions, I look
					forward to leveraging my skills and experience to drive growth and efficiency.
				</p>
			</svelte:fragment>
		</ResumeSection>

		<ResumeSection>
			<svelte:fragment slot="title">Technical Skills</svelte:fragment>

			<svelte:fragment slot="content">
				<Skills />
			</svelte:fragment>
		</ResumeSection>

		<ResumeSection>
			<svelte:fragment slot="title">Work Experience</svelte:fragment>

			<svelte:fragment slot="content">
				<p>
					As a seasoned Full Stack Engineer, I bring nearly a decade of hands-on experience,
					including 8 years in front-end development and 2 years in back-end development. My
					expertise spans JavaScript/TypeScript, Node.js, PHP, Python, and C#, with a track record
					of creating and optimizing complex web applications for startups, enterprise-level
					corporations, and small businesses.
				</p>

				<p>
					I am seeking opportunities in forward-thinking organizations that foster creativity and
					challenge their employees, enabling continued learning and growth. I'm Passionate about
					translating business requirements into functional, user-friendly web solutions, I look
					forward to leveraging my skills and experience to drive growth and efficiency.
				</p>
			</svelte:fragment>
		</ResumeSection>
	</div>

	<div class="right-panel" />
</main>

<style>
	main {
		display: grid;
		grid-template-columns: 1fr;
		width: 100%;
		padding: 1rem 1rem;
	}

	.left-panel {
		display: flex;
		flex-direction: column;
	}

	section.contact {
		margin: 0 0 2rem 0;
		font-size: 1rem;
	}

	.professional-summary {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		width: 100%;
		max-width: 800px;
	}

	.section-title {
		margin: 0 0 1rem 0;
		font-size: 1.5rem;
		font-weight: 300;
	}

	.professional-summary > p {
		margin: 0 0 1rem 0;
		font-size: 1rem;
		font-weight: 200;
	}
</style>
