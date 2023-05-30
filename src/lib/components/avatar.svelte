<script lang="ts">
	import avatar from '$lib/assets/john-avatar.webp?run&width=50;100;150&format=webp&quality=75';
	import Img from '@zerodevx/svelte-img';

	function handleClick() {}
</script>

<button class="avatar" on:click={handleClick}>
	<Img class="avatar-img" src={avatar} alt="John Gallego" />
</button>

<style>
	.avatar {
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

	.avatar > :global(picture) {
		width: 100%;
		height: 100%;
	}

	.avatar :global(.avatar-img) {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
