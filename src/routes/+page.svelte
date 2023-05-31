<script lang="ts">
	import ResumeSection from '$lib/components/resume-section.svelte';
	import Skills from '$lib/components/skills.svelte';
	import WorkExperience from '$lib/components/work-experience.svelte';
	import { workExperienceData } from '$lib/data/work-experience.ts';
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
				{#each workExperienceData as workExperience}
					<WorkExperience accomplishments={workExperience.accomplishments}>
						<svelte:fragment slot="title">{workExperience.title}</svelte:fragment>

						<svelte:fragment slot="company">{workExperience.company}</svelte:fragment>

						<svelte:fragment slot="date">{workExperience.date}</svelte:fragment>

						<svelte:fragment slot="location">{workExperience.location}</svelte:fragment>
					</WorkExperience>
				{/each}
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
</style>
