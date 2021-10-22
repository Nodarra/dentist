import Navbar from './components/Navbar';
import Pocetna from './components/Pocetna';
import './styles/App.css';
import Usluge from './components/Usluge';
function App() {
  return (
    <div className="App">
      <div className="shadow"></div>
      <Navbar />
      <Pocetna />
      <Usluge/>
    </div>
  );
}

export default App;
