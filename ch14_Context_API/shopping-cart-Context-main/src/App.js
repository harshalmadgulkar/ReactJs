import "./App.css";
import CustomItemContext from "./itemContext";
import Items from "./components/Items";
import Navbar from "./components/Navbar";

function App() {
  return (
    <CustomItemContext>
      <div className="App">
        <h2>Shopping Cart</h2>
        <Navbar />
        <Items />
      </div>
    </CustomItemContext>
  );
}
export default App;
