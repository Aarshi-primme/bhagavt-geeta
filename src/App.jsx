import { Routes, Route } from "react-router-dom"; // ✅ Import only Routes & Route
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
