
import './App.css';
//Importo mi componente NavBar
import NavBar from './components/NavBar/NavBar';
import ItemListConstainer from './components/ItemListContainer/ItemListContainer';
import "bulma/css/bulma.css"; 
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListConstainer greeting={"Bienvenidos"}/>
    </div>
  );
}

export default App;
