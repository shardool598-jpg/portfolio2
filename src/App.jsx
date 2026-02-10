import { BrowserRouter, Route, Routes,  } from "react-router-dom";



import Home from "./pages/Home";

import Contact from "./pages/Contact";
import Projectes from "./pages/Projectes";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/Projects" element={<Projectes />} />

            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
