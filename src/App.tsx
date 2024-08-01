import "./App.css";
import background from "../imgs/jupiter.jpg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import NoPage from "./NoPage";

const App: React.FC = () => {
  const Home = () => (
    <div className="flex-grow flex items-center justify-center">
      <main className="text-center p-4">
        <h1 className="text-4xl font-bold mb-4">this is a cool heading</h1>
        <p className="text-lg">
          this site is soo cool, you can see things like: jupiter (the planet), the "about me" page, my projects, and even my contacts!
        </p>
        <p className="text-lg">
        also you might not want to refresh this site as github panicks every time and throws a 404 error (i dont have money for my own servers)
        </p>
      </main>
    </div>
  );

  return (
    <Router basename="/nepunePlace">
      <div
        className="min-h-screen flex flex-col"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "auto 57vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
          backgroundColor: "black",
        }}
      >
        <div className="sticky top-0 z-10 bg-black bg-opacity-75">
          <Menu />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <footer className="mt-auto bg-black bg-opacity-25">
          <p className="px-5 text-xs">
            &copy; 2024 nepune. i should say something interesting but please don't steal. steal bad. jail.
          </p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
