import React from "react"

export default function(){
     /**
     * Challenge: Replace the if/else below with a ternary
     * to determine the text that should display on the page
     */ 
        const [isGoingOut, setIsGoingOut] = React.useState(true)

        function Click() {
            setIsGoingOut(oldValue => oldValue ? false : true)
        }
      
      return (
          <div className="state">
              <h1 className="state--title">Do I feel like going out tonight?</h1>
              <div className="state--value" onClick={Click}>
                  <h1>{isGoingOut ? "Yes" : "No"}</h1>
              </div>
          </div>
      )
}