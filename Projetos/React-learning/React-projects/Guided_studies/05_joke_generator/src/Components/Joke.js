import React from "react"

export default function Joke(props) {

    const [isShown, setIsShown] = React.useState(false)

    function toggleShown() {
        setIsShown(oldShown => !oldShown)
        console.log(isShown)
    }


    return (
        <div className="joke">
            {props.setup &&
                <p className="setup">
                    Setup: {props.setup}
                </p>
            }
            
            {isShown &&
            <p className="punchline">
                Punchline: {props.punchline} 
            </p>
            }
             <button onClick={toggleShown}>
                 {isShown ? "Hide" : "Show"} Punchline 
            </button>
        </div>
    );
}