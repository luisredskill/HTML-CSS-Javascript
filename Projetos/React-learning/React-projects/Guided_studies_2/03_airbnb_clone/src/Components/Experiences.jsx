import "../CSS/Experiences.css"
import Carousel from "./Carousel"


export default function Experiences() {
    return (
        <div>
            <div className="experiences">
                <h1>Online Experiences</h1>
                <p>
                    Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
            <Carousel/>
        </div>
    )
}