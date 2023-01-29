import "./App.css";
import { Navbar, Hero, About, Projects, Contact, Footer } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
