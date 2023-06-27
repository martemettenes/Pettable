<script>
    import Container from '$lib/components/Container.svelte'
    import Hero from '$lib/components/Hero.svelte'

    // export let data;
</script>

<h1> Welcome to Pettable </h1>

<Container>
    <!-- <h1> Pettable pet care system </h1> -->
    <Hero imgSrc='./src/lib/assets/img/dog-img.jpeg' imgAlt='Photo of a vizsla, a dog with short red fur' title='Pettable pet care system' heroButtonText='Get started' />
</Container>
<Container>
    <Hero imgSrc='./src/lib/assets/img/sheep-1.jpeg' imgAlt='Photo of a sheep' title='We take care of all kinds of pettable pets' heroButtonText='Read more' />
</Container>
<Container>
    <Hero imgSrc='./src/lib/assets/img/sheep-1.jpeg' imgAlt='Photo of a sheep' title='We take care of all kinds of pettable pets' heroButtonText='Read more' />
</Container>

