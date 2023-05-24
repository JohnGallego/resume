<script lang="ts">
	import { quadInOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	const rotate = tweened(1, {
		duration: 300,
		easing: quadInOut
	});

	function handleClick() {
		$rotate += 360;
	}
</script>

<button
	class="page-header-menu-button"
	on:click={handleClick}
	style="transform: rotate({$rotate}deg);"
>
	<div class="row">
		<div class="circle" />
		<div class="circle" />
	</div>
	<div class="row">
		<div class="circle" />
		<div class="circle" />
	</div>
</button>

<style>
	.page-header-menu-button {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: stretch;
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		width: 20px;
		height: 20px;
	}

	.circle {
		border-radius: 50%;
		width: 6px;
		height: 6px;
		background-color: lightgrey;
	}

	.row {
		display: flex;
		justify-content: space-between;
	}
</style>
