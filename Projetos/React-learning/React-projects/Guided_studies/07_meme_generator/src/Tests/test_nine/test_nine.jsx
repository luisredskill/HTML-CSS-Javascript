import React from "react"
import WindowTracker from "./WinsdowsTracker"

export default function App() {
    /**
     * Challenge:
     * 1. Create state called `show`, default to `true`
     * 2. When the button is clicked, toggle `show`
     * 3. Only display `<WindowTracker>` if `show` is `true`
     */

    const[show, setShow] = React.useState(true)

    function handleToggle() {
        setShow(oldShow => !oldShow)
    }
    
    return (
        <div className="container">
            <button onClick={handleToggle}>
                Toggle WindowTracker
            </button>
            {show && <WindowTracker />}
        </div>
    )
}