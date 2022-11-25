import Symbol from "../Media/Symbol.svg"

export default function (props) {
    let locationUpperCase = props.item.location.toUpperCase();
    return (
        <section className="travel--container">
            <img src={props.item.imageUrl} alt="" className="travel--container--img"></img>
            <div className="travel--info--container">
                <div className="travel--info--maps">
                    <img src={Symbol} alt=""  className="travel--info--maps--items"></img>
                    <h3 className="travel--info--maps--items travel--info--maps--location">{locationUpperCase}</h3>
                    <a href={props.item.googleMapsUrl}className="travel--info--maps--items">View on Google Maps</a>
                </div>
                <h1 className="travel--title">{props.item.title}</h1>
                <h3 className="travel--date">{`${props.item.startDate} - ${props.item.endDate}`}</h3>
                <p className="travel--description">{props.item.description}</p>
            </div>
        </section>
    )
}