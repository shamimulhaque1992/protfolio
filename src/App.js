import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContactMe from "./Pages/ContactMe/ContactMe";
import About from "./Pages/Home/About";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Navbar from "./Pages/Shared/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Navbar></Navbar>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="about" element={<About></About>}></Route>
          <Route path="projects" element={<Projects></Projects>}></Route>
          <Route path="contact" element={<ContactMe></ContactMe>}></Route>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
