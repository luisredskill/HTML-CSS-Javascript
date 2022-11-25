import './App.css';
import Header from './Components/Header'
import Data from './data'
import Travels from './Components/Travels'

function App() {
  const travelsElements = Data.map(trips => {
    return <Travels 
    item={trips}
    />
  })

  return (
    <div className="container">
      <Header />
      {travelsElements}
    </div>
  );
}

export default App;
