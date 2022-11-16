import trollFace from "../Media/troll_Face.svg"

export default function () {
    return (
        <header>
            <div className="header--img--container">
                <img src={trollFace} alt="" className="header--img"/>
                <h1 className="header--title">Meme Generator</h1>
            </div>
            <p className="header--text">React Course - Project 3</p>
        </header>
    )
}