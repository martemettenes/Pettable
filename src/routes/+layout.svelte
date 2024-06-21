<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<Header />

<main>
    <slot />
</main>

<Footer/>

<style>
    @import '../lib/styles/styles.scss';
</style>
