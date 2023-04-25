<script>
    import Nav from '$lib/components/Nav.svelte'
</script>

<header>
    <a href="/"> Home </a>
    <Nav />
</header>

<style>
    header {
        padding: 1rem;
        background: #1E442E;
        color: #A0CBB1;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

    }
        a {
            color: #A0CBB1;
        }
</style>