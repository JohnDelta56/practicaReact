import logo from './VillaAllende.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenid@ a mi proyecto React
        </p>
         <p>
          M&oacute;dulo 10 - Pr&aacute;ctica 2.3
        </p>
        <a
          className="App-link"
          href="https://cecytem.edomex.gob.mx/villa_de_allende"
          target="_blank"
          rel="noopener noreferrer"
        >
          Informaci&oacute;n del plantel
        </a>
      </header>
    </div>
  );
}

export default App;
