import React from "react"

export default function() {
  const [starWarsdata, setStarWarsData] = React.useState({})

console.log("Component rendered")

  fetch("https://swapi.dev/api/people/1")
    .then(response => response.json())
      .then(data => console.log(data))


  return (
    <div>
      <pre>{JSON.stringify(starWarsdata, null, 2)}</pre>
    </div>
  )
}