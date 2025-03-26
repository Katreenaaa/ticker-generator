import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./pages/Form";
import Ticket from "./pages/Ticket";

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form setUserData={setUserData} />} />
        <Route path="/ticket" element={<Ticket userData={userData} />} />
      </Routes>
    </Router>
  );
}

export default App;
