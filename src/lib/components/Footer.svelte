<script>
    import Button from '$lib/components/Button.svelte'
</script>

<footer class="woof-footer">
    Footer
<Button buttonText='Get in touch' style="light" />
</footer>

<style lang='scss'>
    footer {
        padding: 1rem;
        background: var(--woof-footer-bg);
        color: #A0CBB1;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>