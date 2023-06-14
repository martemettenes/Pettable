<script>
    import '$lib/styles/style.scss';
</script>

<div>
    <slot />
</div>

<style lang="scss">
    div {
        //padding: 1rem;
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        column-gap: 1rem;
        row-gap: 1rem;

        @media screen and (min-width: 768px) {
            grid-template-columns: repeat(12, minmax(0, 1fr));
        }

    }
</style>