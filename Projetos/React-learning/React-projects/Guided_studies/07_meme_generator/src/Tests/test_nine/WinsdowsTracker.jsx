import React from "react"



export default function WindowTracker() {

    const [ windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {

        function watchWidth() {
            setWindowWidth(window.innerWidth)
        }

        
        window.addEventListener("resize", watchWidth)
        console.log("setting up")

        return function () {
            console.log("cleaning up...")
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

    return (
        <h1>Window width: {windowWidth}</h1>
    )
}
