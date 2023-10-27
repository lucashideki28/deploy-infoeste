import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/home";
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./pages/home/components/footer/footer";
import { CorpoDocentePage } from "./pages/corpo-docente/corpo-docente-page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/corpo-docente" element={<CorpoDocentePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
