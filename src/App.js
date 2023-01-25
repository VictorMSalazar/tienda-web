import  NavScrollExample  from "./components/navbar.jsx"
import { Products } from "./components/producst.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavScrollExample/>       
      </header>
      <main>
       <Products/>
      </main>
    </div>
  );
}

export default App;
