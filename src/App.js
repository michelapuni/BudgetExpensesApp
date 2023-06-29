import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BudgetCalculator from "./pages";
import ExpenseTracker from "./pages/ExpenseTracker";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<BudgetCalculator />} />
        <Route path="/ExpenseTracker" element={<ExpenseTracker />} />
      </Routes>
    </Router>
  );
}

export default App;
