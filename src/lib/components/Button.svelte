<script>
    export let buttonText = 'buttonText'
    export let style = 'light'
</script>

{#if style === 'light'}
<button class="button--light-purple">
    {buttonText}
</button>
{:else if style === 'dark'}
<button class="button--dark-green">
    {buttonText}
</button>
{:else} 
<button class="button--light-purple">
    {buttonText}
</button>
{/if}

<style lang='scss'>
    button {
        padding: 8px 16px;
        font-size: 18px;
        line-height: 22px;
        border: none;
        border-radius: 50px;
    }

    .button--dark-green {
        background: #457659;
        color: white;
    }

    .button--light-purple {
        background: #F0EBFF;
        color: #301E63;
    }
</style>