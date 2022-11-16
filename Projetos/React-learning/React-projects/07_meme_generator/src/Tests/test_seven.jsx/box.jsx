import React from "react"

export default function (props) {

    const [darkMode, setDarkMode] = React.useState(props.on)
    
    console.log(darkMode)
    
    function click() {
        setDarkMode(!darkMode)
    }

    const styles =
        darkMode ? { backgroundColor: "#222222" } : { backgroundColor: "transparent" }

    return (
        <div className="box" style={styles} onClick={click}>{props.id}</div>
    )
}