import React from "react"
import boxesData from "../../Data/boxesData"
import Box from "./box"

export default function App() {

    

    const [squares, setSquares] = React.useState(boxesData)

  function toggle(id) {
    setSquares(prevSquares => {
        return prevSquares.map(square => {
            return square.id === id ? {...square, on: !square.on} : square
        })
    })
  }

    const boxesElements = squares.map(element =>
        {
       return <Box 
       key={element.id} 
       id = {element.id} 
       on = {element.on} 
       toggle  = {() => toggle(element.id)}
       />
    })



    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     */
    return (
        <main>
            <div>{boxesElements}</div>
        </main>
    )
}