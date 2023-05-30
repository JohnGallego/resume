<div class="work-experience">
	<header>
		<h2 class="role">
			<slot name="role" />
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

<style>
	header {
		display: flex;
	}
</style>
