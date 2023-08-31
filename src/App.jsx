import Home from "./Pages/Website/Home";
import Err404 from "./Pages/Errors/404";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Loading from "./Components/Loading/Loading";
import About from "./Pages/Website/About";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Tester Routes */}
        <Route path="test" element={<Loading />} />
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/*" element={<Err404 />} />
        {/* Protected Routes */}
      </Routes>
    </div>
  );
}

export default App;
