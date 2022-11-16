import React from "react"

export default function(){
    // const thingsArray = ["Thing 1", "Thing 2"]
    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])


    function addNewThing() {
        setThingsArray(function(oldArray) {
            return [...oldArray, `Thing ${oldArray.length + 1}`]
        })
    }

    
    
    const newThingsArray = thingsArray.map(element => <p key={element}>{element}</p>) 
    
    // function addNewThing() {
    //     thingsArray.push("thing " + (thingsArray.length + 1))
    //     console.log(thingsArray)
    // }

    return (
        <div>
            <button onClick={addNewThing}>Add Item</button> 
            {newThingsArray} 
        </div>
    )
}


