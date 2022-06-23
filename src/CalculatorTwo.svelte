<script>
    import {calculate} from "../scripts/helpers";
    import Operations from "./Operations.svelte";

    let values = [0];
    const opts = [];
    export let resultTwo = 0;

    const add = () => {
        values = [...values, 0]
    }

    $: resultTwo = calculate(values, opts);
</script>

<div>
    {#each values as value, i}
        {#if i > 0}
            <Operations bind:value={opts[i-1]}/>
        {/if}

        <input bind:value={value} type="number">
    {/each}

    <b>= {resultTwo}</b>

    <button on:click={add}>Add value</button>
</div>
<!--{`${oneNumber}${operator}${twoNumber}`}-->

<style>
    div {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        align-items: baseline;
        padding: 1rem;
        border: 2px solid forestgreen;
    }

    button:hover {
        outline: 2px solid darkblue;
    }
</style>