import image01 from "../Media/image01.svg"
import image02 from "../Media/image02.svg"
import image03 from "../Media/image03.svg"
import image04 from "../Media/image04.svg"
import image05 from "../Media/image05.svg"
import image06 from "../Media/image06.svg"
import image07 from "../Media/image07.svg"
import image08 from "../Media/image08.svg"
import image09 from "../Media/image09.svg"

export default function Hero() {
    return(
        <section className="hero--container">
            <div className="hero--img--flexcontainer">
                <div className="hero--img--container">
                    <img src={image01} alt="" id ="img01"></img>
                    <img src={image02} alt="" id ="img02"></img>
                    <img src={image03} alt="" id ="img03"></img>
                    <img src={image04} alt="" id ="img04"></img>
                    <img src={image05} alt="" id ="img05"></img>
                    <img src={image06} alt="" id ="img06"></img>
                    <img src={image07} alt="" id ="img07"></img>
                    <img src={image08} alt="" id ="img08"></img>
                    <img src={image09} alt="" id ="img09"></img>
                </div>
            </div>
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>   
        </section>
    )
}