import React from "react"
import Profile from "../..//Media/Profile-Round.png"
import starFull from "../..//Media/star_full.png"
import starEmpty from "../..//Media/star_empty.png"
import Star from "./star"



export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })


    /**
     * Challenge: Fill in the values in the markup
     * using the properties of our state object above
     * (Ignore `isFavorite` for now)
     */

    let starIcon = contact.isFavorite ? starFull : starEmpty

    // Esta função faz a exata mesma coisa que a de baixo, note que para retornarmos um objeto javascript devemos primeiro indicar que não estamos abrindo as {} da função, assim sendo envolvemos ela em (), ficando ({objeto}).
    // function favorite() {
    //     setContact(prevContact => ({...prevContact, isFavorite: !prevContact.isFavorite}))
    // }

    function toggleFavorite() {
        setContact(function (oldContact) {

            return {
                ...oldContact,
                isFavorite: !oldContact.isFavorite
            }

            // A sintaxe acima representa a mesma sintaxe abaixo, o ... diz para o programa separar o objeto dentro do return
            // return {
            //     firstName: "John",
            //     lastName: "Doe",
            //     phone: "+1 (719) 555-1212",
            //     email: "itsmyrealname@example.com",
            //     isFavorite: false
            //     isFavorite: !isFavorite
            // }


        })
    }

    return (
        <main>
            <article className="card">
                <img src={Profile} className="card--image" />

                <div className="card--info" >
                        <Star
                            isFilled={contact.isFavorite}
                            handleClick={toggleFavorite}
                        />
                    <h2 className="card--name">
                        {`${contact.firstName} ${contact.lastName}`}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}