<script>
    import Button from '$lib/components/Button.svelte'

    export let imgAlt = 'imgAlt'
    export let imgSrc = 'src/lib/assets/img/cat-1.jpeg'
    export let title = 'title'
    export let heroButtonText = 'heroButtonText'
</script>

<section>
    <img alt={imgAlt} src={imgSrc} />
    <div>
        <h2>
            {title}
        </h2>
        <Button buttonText={heroButtonText} />
    </div>
</section>

<style lang='scss'>
    section {
        display: flex;
        background: lightgrey;
        
        img {
            height: 100%;
            width: 50%;
        }
        
        div {
            width: 50%;
            padding: 1rem;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            h2 {
                margin-top: 0;
                text-align: center;
            }
        }
    }

</style>