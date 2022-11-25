import './App.css';
import card_img_01 from "./Media/card_img_01.svg"
import card_img_02 from "./Media/card_img_02.svg"
import card_img_03 from "./Media/card_img_03.svg"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Card from "./Components/Card"
import Data from "./Data"

function App() {
  const cardElements = Data.map(cards => {
    return <Card 
    key={cards.id}
    item={cards}
    />
  })
  return (
    
   <div className='container'>
    <Navbar/>
    <Hero/>
    <div className='card--whell'>
      {cardElements}
       {/* <Card
       img = {card_img_01}
       rating = "5.0"
       Nrating = "6"
       country = "USA"
       description = "Life lessons with Katie Zaferes"
       price = "136"
       />
       <Card
       img = {card_img_02}
       rating = "5.0"
       Nrating = "30"
       country = "USA"
       description = "Learn wedding Photography"
       price = "125"
       />
       <Card
       img = {card_img_03}
       rating = "4.8"
       Nrating = "2"
       country = "USA"
       description = "Group Mountain Biking"
       price = "50"
       /> */}
    </div>
   </div>
  );
}

export default App;
