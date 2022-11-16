import memesData from "../Data/memesData"
import React from "react"


let img = "https://i.imgflip.com/2wifvo.jpg"

export default function () {
    const [meme, setMeme] = React.useState({
        topText: "dd",
        bottomText: "dd",
        imgURL: "https://i.imgflip.com/1x6f.jpg"
        
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)


    function ClickMe() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random()* memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(oldMeme => ({...oldMeme,imgURL: url}))
    }

    return (
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top text" />
                <input type="text" className="form--input" placeholder="Botton text" />
                <button className="form--button" onClick={ClickMe}>Get a new meme image 🖼️</button>
                <img src={meme.imgURL} alt="" />

            </div>
        </main>
    )
}