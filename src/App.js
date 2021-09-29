import "./App.css";
import Search from "./components/Search";
import Digimons from "./components/Digimons";
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Search />
        <Digimons />
      </div>
    </div>
  );
}

export default App;
