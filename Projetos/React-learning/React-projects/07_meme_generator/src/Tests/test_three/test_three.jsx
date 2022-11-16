import React from "react"
import Count from "./count"

export default function () {
    const [counter, setCount] = React.useState(0)
    console.log(counter)

    // Toda vez que chamamos uma função callback dentro de uma função set, a função set passa para a função callback o valor atual da nossa variável
    function sub() {
        setCount(function (previousCount) {
            return previousCount - 1
        })
    }
    function add() {
        setCount(previousCount => previousCount + 1)

    }

    return (
        <div className="counter">
            <button className="counter--minus" onClick={sub}>–</button>
            <Count
                number={counter} />
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}





