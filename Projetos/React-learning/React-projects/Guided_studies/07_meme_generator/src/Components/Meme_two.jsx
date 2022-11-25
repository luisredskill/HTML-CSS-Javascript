import memesData from "../Data/memesData"
import React from "react"

let img = "https://i.imgflip.com/2wifvo.jpg"

export default function () {

    const [meme, setMeme] = React.useState({
        imgURL: "https://i.imgflip.com/21tqf4.jpg",
        topText: "This is the top text",
        bottomText: "This is the bottom text"  
    })

    function ClickMe() {
        const memesArray = memesData.data.memes
        const randomInteger = Math.floor(Math.random()*100)
        const url = memesArray[randomInteger].url
        
        setMeme({imgURL:url, topText: "mudou topText", bottomText: "mudou bottom text"})
        console.log(url)
    }

    return (
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top text" />
                <input type="text" className="form--input" placeholder="Botton text" />
                <button className="form--button" onClick={ClickMe}>Get a new meme image 🖼️</button>     
            </div>
            {meme.topText}
            <div className="meme--image--container"><img src={meme.imgURL} alt="" className="meme--image"/></div>
            {meme.bottomText}
        </main>
    )
}