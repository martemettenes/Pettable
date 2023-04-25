<script>
    import Button from '$lib/components/Button.svelte'
</script>

<footer>
    Footer
<Button />
</footer>

<style>
    footer {
        padding: 1rem;
        background: #1E442E;
        color: #A0CBB1;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        position:absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }

    a {
            color: #A0CBB1;
        }
</style>