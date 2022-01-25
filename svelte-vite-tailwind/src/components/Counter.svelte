<script>
	let count = 0
	const increment = () => count++
</script>
  
<button on:click={increment} class="btn btn-primary">
	Clicks: {count}
</button>
  