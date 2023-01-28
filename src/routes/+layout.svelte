<script>
	import Footer from '../components/Footer.svelte';
	import Nav from '../components/Nav.svelte';
	import '../app.css';
</script>

<Nav />

<div class="flex">
	<slot />
</div>

<Footer />
