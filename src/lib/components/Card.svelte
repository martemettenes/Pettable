<script>
import { urlFor } from '$lib/utils/image.js'

export let imgSrc = 'imgSrc';
export let imgAlt = 'imgAlt';
</script>


<div class="card">
    <div class="cardImgContainer ratio ratio--1-1">
        <img class="ratio__item ratio__item--cover" src={urlFor(imgSrc).url()} alt={imgAlt}/>
    </div>
    <div class="cardTextContainer">
        <slot />
    </div>
</div>

<style lang="scss">
    .card {
        color: $color-purple-20;
        grid-column: span 2;

        @include breakpointMax(xxs) {
            grid-column: span 4;
        }

        .cardImgContainer {
            width: 100%;
            overflow: hidden;
            margin: 0;
        }

        .cardTextContainer {
            padding: 1rem;
            background-color: $color-green-70;
        }

    }

</style>