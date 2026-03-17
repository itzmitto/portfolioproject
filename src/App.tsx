import Header from "./components/Header";    
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import { BrowserRouter, Routes, Route} from 'react-router';


function App() {
  return (  
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/contact" Component={Contact} />
          <Route path="/Skills" Component={Skills} />
          <Route path="/AboutMe" Component={AboutMe} />
          <Route path="/Projects" Component={Projects} />
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;


