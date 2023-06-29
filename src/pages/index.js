import React, { useState } from "react";

const BudgetCalculator = () => {
  const [incomeInput, setIncomeInput] = useState("");
  const [budget, setBudget] = useState({
    needs: "",
    wants: "",
    savings: "",
  });

  const handleInputChange = (e) => {
    setIncomeInput(e.target.value);
  };

  const calculateBudget = () => {
    if (incomeInput !== "") {
      const income = parseFloat(incomeInput);
      const needsBudget = (income * 50) / 100;
      const wantsBudget = (income * 30) / 100;
      const savingsBudget = (income * 20) / 100;
      setBudget({
        needs: needsBudget,
        wants: wantsBudget,
        savings: savingsBudget,
      });
    }
  };

  return (
    <div className="container">
      <h1>Budget Calculator</h1>
      <div className="input-wrapper">
        <label htmlFor="income">Enter Your Income:</label>
        <input
          type="number"
          id="income"
          value={incomeInput}
          onChange={handleInputChange}
        />
      </div>
      <button className="calculate-btn" onClick={calculateBudget}>
        Calculate Budget
      </button>
      <div className="budget-wrapper">
        <div className="budget-item">
          <h3>Needs</h3>
          <p>{`$${Number(budget.needs).toFixed(2)}`}</p>
        </div>
        <div className="budget-item">
          <h3>Wants</h3>
          <p>{`$${Number(budget.wants).toFixed(2)}`}</p>
        </div>
        <div className="budget-item">
          <h3>Savings</h3>
          <p>{`$${Number(budget.savings).toFixed(2)}`}</p>
        </div>
      </div>
    </div>
  );
};

export default BudgetCalculator;
