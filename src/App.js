import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import AddContent from "./Pages/AddContent";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<AddContent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
