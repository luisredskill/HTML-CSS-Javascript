import './App.css';
import mr_whinkerson from "./images/mr-whiskerson.png"
import fluffy_kins from "./images/fluffykins.png"
import felix from "./images/felix.png"
import pumpkin from "./images/pumpkin.png"
import mail from "./images/mail-icon.png"
import phone from "./images/phone-icon.png"
import Contact from "./components/Contact"


function App() {
  return (
    <div className='contacts'>
      
        <Contact
         name="Mr. Whiskerson"
         phone="(212) 555-1234"
         email="mr.whiskaz@catnap.meow"
         img={mr_whinkerson}
         />
      <Contact
       name="Fluffly Kins"
       phone="(212) 555-2345"
       email="fluff@me.com"
       img={fluffy_kins}
       />
      <Contact
       name="Felix"
       phone="(212) 555-4567"
       email="thecat@hotmail.com"
       img={felix}
       />
      <Contact
       name="Pumpkins"
       phone="(0800) CAT KING"
       email="pumpkin@scrimba.com"
       img={pumpkin}
       />
      
    </div>
);
}
{/* <div className="contacts">
    
    <div className="contact-card">
        <img src={mr_whinkerson}/>
        <h3>Mr. Whiskerson</h3>
        <div className="info-group">
            <img src={phone} />
            <p>(212) 555-1234</p>
        </div>
        <div className="info-group">
            <img src={mail} />
            <p>mr.whiskaz@catnap.meow</p>
        </div>
    </div>
    
    <div className="contact-card">
        <img src={fluffy_kins}/>
        <h3>Fluffykins</h3>
        <div className="info-group">
            <img src={phone} />
            <p>(212) 555-2345</p>
        </div>
        <div className="info-group">
            <img src={mail} />
            <p>fluff@me.com</p>
        </div>
    </div>
    
    <div className="contact-card">
        <img src={felix}/>
        <h3>Felix</h3>
        <div className="info-group">
            <img src={phone} />
            <p>(212) 555-4567</p>
        </div>
        <div className="info-group">
            <img src={mail} />
            <p>thecat@hotmail.com</p>
        </div>
    </div>
    
    <div className="contact-card">
        <img src={pumpkin}/>
        <h3>Pumpkin</h3>
        <div className="info-group">
            <img src={phone} />
            <p>(0800) CAT KING</p>
        </div>
        <div className="info-group">
            <img src={mail} />
            <p>pumpkin@scrimba.com</p>
        </div>
    </div>
    
</div> */}
export default App;
