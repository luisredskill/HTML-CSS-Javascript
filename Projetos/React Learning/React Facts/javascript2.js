function Header() {
    return (
        <header>
            <nav className="navbar">
                <img src="react.png" className="img" ></img>
                <ul className="nav-list">
                    <li className="nav-items">Pricing</li>
                    <li className="nav-items">About</li>
                    <li className="nav-items">Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Content() {
    return(
        <body>
            <h1> Reasons why i'm excited to learn React</h1>
                <ul>
                    <li>It is a word wide technology recognized for it's excellence</li>
                    <li>I'm more likely to be hired as a developer if i know react</li>
                    <li>It let's me search for forign remote jobs</li>
                </ul>
        </body>
    )
}

function Footer() {
    return( 
        <footer className="Footer">
            <small>
                <p>&copy; 2022 Ribeiro development. All rights reserved.</p>
            </small>
        </footer>
    )
}

function Page() {
    return (
        <div>
            <Header/>
            <Content/>
           <Footer/>
        </div>
    )
}



ReactDOM.render(<Page />, document.getElementById("root"))