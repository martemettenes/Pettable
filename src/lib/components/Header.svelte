<script>
    import Nav from '$lib/components/Nav.svelte'
    import logo from '$lib/assets/logo/Pettable-logo--light-purple.svg';
</script>

<header class="woof-header">
    <section>
        <a href="/">
            <img src={logo} alt="Pettable logo">  
        </a>
        <Nav />
    </section>
</header>

<style lang="scss">
    header {
        padding: 1rem;
        background: var(--woof-header-bg);
        color: var(--woof-header-color);
        overflow: hidden;

        section {
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            max-width: 2000px;
        }
    }
</style>