import React from "react"

export default function () {

    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */

    const [userInfo, setUserInfo] = React.useState({
        email: "",
        password: "",
        password2: "",
        newsletter: true
    })

    function handleSubmit(event) {
        event.preventDefault()
        const {password, password2, newsletter} = userInfo
        
        password === password2 ? console.log("Successfully signed up") : console.log("Passwords does not match")

        newsletter ? console.log("Thanks for signingup for our newsletter!") :  console.log()

    }

    

    function handleChange(event) {
        const {value, name, type, checked} = event.target
        
        
        setUserInfo(oldUserInfo => {
            return {
                ...oldUserInfo,
                [name] : type === "checkbox" ? checked : value
            }
           
        })
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email address"
                    className="form--input"
                    name = "email"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="form--input"
                    name ="password"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    className="form--input"
                    name ="password2"
                    onChange={handleChange}
                />

                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        checked={userInfo.newsletter}
                        onChange={handleChange}
                        name= "newsletter"
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}