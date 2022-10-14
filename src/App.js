import Dev from "./components/dev";
import Footer from "./components/footer";
import Home from "./components/home";
import Navigation from "./components/navigation";
import Register from "./components/register";
import Say from "./components/say";
import Support from "./components/support";
import Supported from "./components/supported";
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
      <Say />
      <Supported />
      <Footer />
    </div>
  );
}

export default App;
