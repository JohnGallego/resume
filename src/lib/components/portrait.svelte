<script lang="ts">
	import portrait from '$lib/assets/john-portrait.webp?run&&width=50;100&fit=cover&format=webp&quality=75';
	import Img from '@zerodevx/svelte-img';
</script>

<div class="portrait">
	<Img class="portrait-image" src={portrait} alt="John Gallego" />
</div>
