import React from "react"

export default function () {
    
    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])

function addNewThing() {
    setThingsArray(oldArray => [...oldArray, `Thing ${oldArray.length + 1}`])
    console.log(thingsArray)
}

const Array = thingsArray.map(element => <p key={element}>{element}</p>)



    return (
        <div>
            <button onClick={addNewThing}>Add Item</button> 
            {Array}
        </div>
    )
}