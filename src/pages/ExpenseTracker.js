import React, { useState } from "react";

const ExpenseTracker = () => {
  // Define state variables
  const [income, setIncome] = useState(0);
  const [wants, setWants] = useState(0);
  const [needs, setNeeds] = useState(0);
  const [savings, setSavings] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [selectedTableData, setSelectedTableData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "income":
        setIncome(value);
        break;
      case "wants":
        setWants(value);
        break;
      case "needs":
        setNeeds(value);
        break;
      case "savings":
        setSavings(value);
        break;
      default:
        break;
    }
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const date = event.target.date.value;
    const existingTable = tableData.find((data) => data.date === date);

    if (existingTable) {
      setErrorMessage("Table with this date already exists");
      return;
    }

    const data = {
      id: event.target.date.value,
      date: event.target.date.value,
      income,
      wants,
      needs,
      savings,
    };
    setTableData([...tableData, data]);
    setIncome(0);
    setWants(0);
    setNeeds(0);
    setSavings(0);
    setErrorMessage("");
  };

  // Function to handle table cell changes
  const handleTableCellChange = (event, id, cellName) => {
    const newData = [...tableData];
    const rowIndex = newData.findIndex((data) => data.id === id);
    newData[rowIndex][cellName] = event.target.value;
    setTableData(newData);
  };

  // Function to handle dropdown menu changes
  const handleDropdownChange = (event) => {
    const selectedDate = event.target.value;
    const selectedData = tableData.find((data) => data.date === selectedDate);
    setSelectedTableData(selectedData);
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" />

        <label htmlFor="income">Starting Income:</label>
        <input
          type="number"
          id="income"
          name="income"
          value={income}
          onChange={handleInputChange}
        />

        <label htmlFor="wants">Wants:</label>
        <input
          type="number"
          id="wants"
          name="wants"
          value={wants}
          onChange={handleInputChange}
        />

        <label htmlFor="needs">Needs:</label>
        <input
          type="number"
          id="needs"
          name="needs"
          value={needs}
          onChange={handleInputChange}
        />

        <label htmlFor="savings">Savings:</label>
        <input
          type="number"
          id="savings"
          name="savings"
          value={savings}
          onChange={handleInputChange}
        />

        <button type="submit">Create Table</button>
      </form>

      {errorMessage && <p>{errorMessage}</p>}

      {tableData.length > 0 && (
        <div>
          <label htmlFor="pastTables">Select a past table:</label>
          <select id="pastTables" onChange={handleDropdownChange}>
            <option value="">Select a table</option>
            {tableData.map((data) => (
              <option key={data.id} value={data.date}>
                {data.date}
              </option>
            ))}
          </select>
        </div>
      )}

      {selectedTableData && (
        <table>
          <thead>
            <tr>
              <th>Starting Income</th>
              <th>Wants</th>
              <th>Needs</th>
              <th>Savings</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{selectedTableData.income}</td>
              <td>
                <input
                  type="number"
                  value={selectedTableData.wants}
                  onChange={(event) =>
                    handleTableCellChange(event, selectedTableData.id, "wants")
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={selectedTableData.needs}
                  onChange={(event) =>
                    handleTableCellChange(event, selectedTableData.id, "needs")
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={selectedTableData.savings}
                  onChange={(event) =>
                    handleTableCellChange(
                      event,
                      selectedTableData.id,
                      "savings"
                    )
                  }
                />
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExpenseTracker;
