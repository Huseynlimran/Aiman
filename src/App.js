import Dev from "./components/dev";
import Home from "./components/home";
import Navigation from "./components/navigation";
import Register from "./components/register";
import Support from "./components/support";
import Tech from "./components/tech";


function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Register />
      <Tech />
      <Dev />
      <Support />
    </div>
  );
}

export default App;
