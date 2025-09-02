// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Homepage from "./homepage";
// import About from "./about";
// import Services from './services';
// import RegisterPhysio from './RegisterPhysio';
// import Signup from "./signup";
// import Login from "./login";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/register-physio" element={<RegisterPhysio />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />

//         {/* 🔥 Catch-all route */}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./homepage";
import About from "./about";
import Services from './services';
import RegisterPhysio from './RegisterPhysio';
import Signup from "./signup";
import Login from "./login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/register-physio" element={<RegisterPhysio />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

