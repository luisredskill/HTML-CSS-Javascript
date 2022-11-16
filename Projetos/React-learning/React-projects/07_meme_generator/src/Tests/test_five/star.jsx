import React from "react"
import starEmpty from "../../Media/star_empty.png"
import starFull from "../../Media/star_full.png"

export default function (props) {
    return (
        <img
            src={props.isFilled ? starFull : starEmpty}
            className="card--favorite"
            onClick={props.handleClick}
        />
    )
}