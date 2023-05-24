<script lang="ts">
	import avatar from '$lib/assets/john-avatar.webp?run&&width=50;100&fit=cover&format=webp&quality=75';
	import Img from '@zerodevx/svelte-img';

	function handleClick() {}
</script>

<button class="page-header-avatar" on:click={handleClick}>
	<Img class="avatar" src={avatar} alt="John Gallego" />
</button>

<style>
	.page-header-avatar {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: none;
		border: none;
		border-radius: 50%;
		padding: 0;
		cursor: pointer;
		overflow: hidden;
		width: 50px;
		height: 50px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
</style>
