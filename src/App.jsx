import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";

import Footer from "./components/Footer";


const App = () => {
  return (
    <Router>
      
      <Routes>
        
        <Route path="/" element={<Home />} />

    

        
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
