<script>
    export const operators = ['+', '-', '*', '/'];
    export let value = operators[0];
</script>

<select bind:value>
    {#each operators as value}
        <option {value}>{value}</option>
    {/each}
</select>