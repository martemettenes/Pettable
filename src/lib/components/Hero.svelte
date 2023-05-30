<script>
    import Button from '$lib/components/Button.svelte'

    export let imgAlt = 'imgAlt'
    export let imgSrc = 'src/lib/assets/img/cat-1.jpeg'
    export let title = 'title'
    export let heroButtonText = 'heroButtonText'
</script>

<section>
    <div class="imgDiv">
        <img alt={imgAlt} src={imgSrc} />
    </div>
    <div>
        <h2>
            {title}
        </h2>
        <Button buttonText={heroButtonText} style="dark" />
    </div>
</section>

<style lang='scss'>
    section {
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
        background: #F0EBFF;
        
        .imgDiv {
            position: relative;

            &::after {
                content: "";
                display: block;
                padding-bottom: 100%
            }
            
            img {
                position: absolute;
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
        
        div {
            width: 100%;
            padding: 1rem;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            @media (min-width: 481px) {
                width: 50%
            }

            h2 {
                margin-top: 0;
                text-align: center;
            }
        }
    }

</style>