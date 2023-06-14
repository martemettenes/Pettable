<script>
    import Card from '$lib/components/Card.svelte'
    import CardGroup from '$lib/components/CardGroup.svelte'
    export let data;
</script>


<h1> My page hello </h1>
{#if data.pets && data.pets.length}
<section>
    <h2> My pets </h2>
    <CardGroup>
        {#each data.pets as pet}
        <Card
        imgSrc={pet.image}
        imgAlt={pet.image.caption}>
            <h3> {pet.name} </h3>
            <p> {pet.type} </p>
            <p> {pet.birthdate} </p>
        </Card>
        {/each}
    </CardGroup>
</section>
{:else}
	<p>No pets found.</p>
{/if}