import Banner from "./Banner"
import "../CSS/Carousel.css"


export default function Carousel() {
    return (
        <div className="carousel--container">
            
            <div className="carousel--wrapper">
                <div className="carousel--gallery">
                    <Banner className="carousel--item carousel--current--item" 
                        state="SOLD OUT"
                        rating="5.0"
                        Nrating={6}
                        country="USA"
                        description="Life lessons with Katie Zaferes"
                        price={136}
                    />
                    <Banner className="carousel--item carousel--current--item"
                        state="SOLD OUT"
                        rating="5.0"
                        Nrating={6}
                        country="USA"
                        description="Life lessons with Katie Zaferes"
                        price={136}
                    />
                    <Banner className="carousel--item carousel--current--item"
                        state="SOLD OUT"
                        rating="5.0"
                        Nrating={6}
                        country="USA"
                        description="Life lessons with Katie Zaferes"
                        price={136}
                    />
                    <Banner className="carousel--item carousel--current--item"
                        state="SOLD OUT"
                        rating="5.0"
                        Nrating={6}
                        country="USA"
                        description="Life lessons with Katie Zaferes"
                        price={136}
                    />
                    <Banner className="carousel--item carousel--current--item"
                        state="SOLD OUT"
                        rating="5.0"
                        Nrating={6}
                        country="USA"
                        description="Life lessons with Katie Zaferes"
                        price={136}
                    />
                    
                </div>
            </div>
        </div>
    )
}