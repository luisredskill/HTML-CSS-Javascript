import React from "react"
import Header from "./Header"
import Body from "./Body"

export default function () {
    const [user, setUser] = React.useState("Joe")
    return (
        <main>
            <Header
            usuario = {user}
            />
            <Body
            usuario = {user}
            />
        </main>
    )
}