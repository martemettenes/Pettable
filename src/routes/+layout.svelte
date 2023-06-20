<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<Header />

<main>
    <slot />
</main>

<Footer/>

<style lang="scss">
    @import '../lib/styles/styles.scss';

</style>