import cardstar from "../Media/card_star.svg"
import cardball from "../Media/card_ball.svg"

export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    } 
    return (
        <div className="card--container">
            {badgeText != undefined && <div className="card--badge">{badgeText}</div>}
            <img src={`./Media/${props.item.coverImg}`} alt="" className="card--img"></img>
            <div className="card--rating--container">
                <img src={cardstar} alt="" className="card--star"></img>
                <p>
                    <span>{props.item.stats.rating}</span>
                    <span className="card--lightfont">({props.item.stats.reviewCount})</span>
                    <img src={cardball} alt="" className=""></img>
                    <span className="card--lightfont">{props.item.location}</span>
                </p>
            </div>
            <div className="card--text--container">
                <p>
                    {props.item.title}
                </p>
                <p>
                    <b>From ${props.item.price}</b>/ person
                </p>
            </div>
        </div>
    )
}

