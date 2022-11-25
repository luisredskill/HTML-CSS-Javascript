import trollFace from "../Media/troll_Face.svg"

export default function () {
    return (
        <header className="header">
             <img src={trollFace} alt="" className="header--img"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )

   
}