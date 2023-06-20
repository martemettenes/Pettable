<script>
    export let cardGroupTitle = 'Card Group';
</script>

<div class="cardgroup">
    <h2> {cardGroupTitle}</h2>
    <section>
        <slot />
    </section>
</div>

<style lang="scss">
@import '../styles/styles.scss';

    .cardgroup {
        margin-bottom: 4rem;

    }

    h2 {
        color: $color-purple-20;
        margin-bottom: 1rem;
    }

    section {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        column-gap: 1rem;
        row-gap: 1rem;

        @include breakpoint(s){
            grid-template-columns: repeat(6, minmax(0, 1fr));
        }

        @include breakpoint(m){
            grid-template-columns: repeat(12, minmax(0, 1fr));
        }

    }
</style>