import airbnb from "../Media/airbnb.svg"

export default function Navbar() {
    return(
        <nav>
            <img src={airbnb} alt="" className="nav--logo"></img>
        </nav>
    )
}

