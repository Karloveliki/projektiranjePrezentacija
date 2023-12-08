import logo from './logo.svg';
import './App.css';
import Bullet from './components/Bullet';
import BulletList from './components/BulletList';
import Slide from './components/Slide';
import ProblemiSaNatom from './slides/ProblemiSaNatom';
import StariNacin from './slides/StariNacin';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn projektiranje
        </a>
        <StariNacin></StariNacin>
        <ProblemiSaNatom></ProblemiSaNatom>
        
      </header>
    </div>
  );
}

export default App;
