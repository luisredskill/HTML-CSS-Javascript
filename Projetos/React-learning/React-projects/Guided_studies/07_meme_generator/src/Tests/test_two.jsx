import React from "react"

export default function(){
    const [isImportant, setIsImportant] = React.useState("Yes")

    

    console.log(isImportant)

    function Cliquei() {
        if (isImportant === "Yes") {
            setIsImportant("No")
        } else{
            setIsImportant("Yes")
        }
        
    }

    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value" onClick={Cliquei}>
                <h1>{isImportant}</h1>
            </div>
        </div>
    )
}




