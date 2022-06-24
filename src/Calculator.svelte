<script>
    import {calc} from "../scripts/helpers";
    import Operations from "./Operations.svelte";
    let oneNumber = 0;
    let twoNumber = 0;
    const opts = [];
    let op = opts[0];
    export let result = 0;
    $: result = calc(oneNumber, twoNumber, op);
</script>

<div>
    <input bind:value={oneNumber} type="number">
    <Operations bind:value={op}/>
    <input bind:value={twoNumber} type="number">
    <b>= {result}</b>
</div>
<!--{`${oneNumber}${operator}${twoNumber}`}-->

<style>
    div {
        display: flex;
        gap: 0.5rem;
        align-items: baseline;
        padding: 1rem;
        border: 2px solid forestgreen;
    }
</style>