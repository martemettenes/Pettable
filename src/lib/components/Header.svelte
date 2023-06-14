<script>
    import Nav from '$lib/components/Nav.svelte'

    let src = 'src/lib/assets/logo/Pettable-logo--light-purple.svg';
</script>

<header>
    <section>
        <a href="/">
            <img {src} alt="Pettable logo">  
        </a>
        <Nav />
    </section>
</header>

<style lang="scss">
    header {
        padding: 1rem;
        background: #1E442E;
        color: #A0CBB1;
        overflow: hidden;

        section {
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            max-width: 2000px;
        }
    }
</style>