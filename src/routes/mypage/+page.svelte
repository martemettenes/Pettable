<script>
    import Card from '$lib/components/Card.svelte'
    import CardGroup from '$lib/components/CardGroup.svelte'

    export let data;
</script>


<h1> My page hello </h1>
{#if data.pets && data.pets.length}
    <CardGroup cardGroupTitle="My pets">
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
    <CardGroup cardGroupTitle="My people">
        <!-- {#each data.people as person}
        <Card
        imgSrc={person.image}
        imgAlt={person.image.caption}>
            <h3> {person.name} </h3>
            <p> {person.email} </p>
            <p> {person.phone} </p>
        </Card>
        {/each} -->
        <div>
            People
        </div>
    </CardGroup>
{:else}
	<p>No pets found.</p>
{/if}