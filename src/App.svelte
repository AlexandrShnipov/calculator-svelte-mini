<script>
    import Calculator from "./Calculator.svelte";
    import CalculatorTwo from "./CalculatorTwo.svelte";

    let result;
    let resultTwo;
</script>

<main>
    <div>
        <div class="calculatorWrap">
            <Calculator bind:result/>
            <h1>Result: {result}</h1>
        </div>
        <div class="calculatorWrap">
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
        background-color: rgba(111, 255, 157, 0.7);
        display: flex;
        flex-direction: column;
    }

    div{
        padding: 1rem;
    }

    main>div>div{
        border: 2px solid red;
    }

    main>div>div:nth-child(1){
        margin-bottom: 1rem;
        border: 2px solid darkblue;
    }

    h1 {
        text-transform: uppercase;
        align-self: flex-start;
    }

    .calculatorWrap{
        background-color: rgb(235, 245, 255);
    }

    .calculatorWrap:nth-child(2){
        background-color: rgb(255, 255, 255);
    }

</style>