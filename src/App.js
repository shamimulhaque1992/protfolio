import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Pages/Blogs/Blogs";
import ContactMe from "./Pages/ContactMe/ContactMe";
import About from "./Pages/Home/About";
import Home from "./Pages/Home/Home";
import Skills from "./Pages/Home/Skills";
import ProjectDetails from "./Pages/Projects/ProjectDetails";
import Projects from "./Pages/Projects/Projects";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar></Navbar>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="about" element={<About></About>}></Route>

          <Route path="skills" element={<Skills></Skills>}></Route>
          <Route path="projects" element={<Projects></Projects>}></Route>

          <Route path=":id" element={<ProjectDetails></ProjectDetails>}></Route>
          <Route path="contact" element={<ContactMe></ContactMe>}></Route>
          <Route path="blogs" element={<Blogs></Blogs>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
