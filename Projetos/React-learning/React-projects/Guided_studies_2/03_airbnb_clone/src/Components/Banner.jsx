import "../CSS/Banner.css"
import Exp1 from "../Img/Exp_1_no_batch.svg"
import Star from "../Img/Star.svg"

export default function Banner(props) {

    function OnClick(){
        alert("gg")
    }

    return (
        <div className="banner--container">
            <div className="banner--img--container" onMouseDown={OnClick}>
                <img src={Exp1} alt="" className="banner--img"></img>
                {props.state && <span className="banner--batch" >{props.state}</span>}
            </div>
            <div className="banner--text--container">
                <div className="banner--rating--container">
                    <img src={Star} alt="" className="banner--rating--star" />
                    <p>
                        {props.rating}
                        <span className="banner--rating--number">({props.Nrating}) • {props.country}
                        </span>
                    </p>
                </div>
                <p>{props.description}</p>
                <p>
                    <span className="banner--price">
                        From ${props.price}
                    </span>
                    / person
                </p>
            </div>
        </div>
    )
}