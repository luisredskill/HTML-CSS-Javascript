import React from "react"

export default function (props) {

    const styles =
        props.on ? { backgroundColor: "#222222" } : { backgroundColor: "transparent" }

    return (
        <div 
        className="box" 
        style={styles} 
        onClick={props.toggle}
        >{props.id}</div>
    )
}