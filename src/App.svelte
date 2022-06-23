<script>
    import Calculator from "./Calculator.svelte";
    import CalculatorTwo from "./CalculatorTwo.svelte";

    let result;
    let resultTwo;
</script>

<main>
    <div>
        <div>
            <Calculator bind:result/>
            <h1>Result: {result}</h1>
        </div>
        <div>
            <CalculatorTwo bind:resultTwo={resultTwo}/>
            <h1>Result: {resultTwo}</h1>
        </div>

    </div>

</main>

<style>
    main {
        display: grid;
        place-content: center;
        height: 100vh;
        padding: 5rem;
    }

    main>div{
        border: 2px solid saddlebrown;
        max-width: 53rem;
    }

    div {
        padding: 1rem;
        border: 2px solid red;
        display: flex;
        flex-direction: column;
    }

    main>div>div:nth-child(1){
        margin-bottom: 1rem;
        border: 2px solid darkblue;
    }

    h1 {
        text-transform: uppercase;
        align-self: flex-start;
    }

</style>