
function AlwaysCapital() {
    return (
        <div>
            <img src="react.png" alt="" width="40px" ></img>
            <h1> Fun facts about react</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintened by Facebook</li>
                <li>Powers thousands of enteprise apps,including mobile apps</li>
            </ul>
        </div>
    )
}

ReactDOM.render(<AlwaysCapital/>, document.getElementById("root"))

