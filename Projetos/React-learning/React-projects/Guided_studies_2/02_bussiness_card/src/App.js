import './App.css';
import Buttons from "./components/Buttons"
import Footer from "./components/Footer"
import Name from "./components/Name"
import Photo from "./components/Photo"
import Text from "./components/Text"

function App() {
  return (
    <div className="App">
      <Photo/>
      <Name/>
      <Buttons/>
      <Text/>
      <Footer/>
    </div>
  );
}

export default App;
