import "./App.css";
import Search from "./components/Search";
import Showmap from "./components/Showmap";
//Added this line only okay
function App() {
  return (
    <div className="App">
      <Search />
      <Showmap />
    </div>
  );
}

export default App;
