import Home from "./components/home";
import Navigation from "./components/navigation";
import Register from "./components/register";
import Tech from "./components/tech";


function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Register />
      <Tech />
    </div>
  );
}

export default App;
