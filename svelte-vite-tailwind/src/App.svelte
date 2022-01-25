<script>
	import Counter from '@components/Counter.svelte'
</script>

<div class="h-full w-full flex flex-col items-center justify-center">
	<h1 class="text-3xl">Hello world</h1>
	<Counter/>
</div>

<style lang="postcss">
	:global(html, body, #app) { width:100%; height:100%; }
</style>
