import './styles/App.css';

import Usluge from './components/Usluge';
import Navbar from './components/Navbar';
import Pocetna from './components/Pocetna';
import Onama from './components/Onama';
import Kontakt from './components/Kontakt';

function App() {
  return (
    <div className="App">
      <div className="shadow"></div>
      <Navbar />
      <Pocetna />
      <Usluge/>
      <Onama />
      <Kontakt />
    </div>
  );
}

export default App;
