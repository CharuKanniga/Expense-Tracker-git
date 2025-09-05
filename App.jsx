import React, { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = (e) => {
    e.preventDefault();
    if (!name || !amount) return;
    setExpenses([...expenses, { name, amount: parseFloat(amount) }]);
    setName("");
    setAmount("");
  };

  const total = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>Expense Tracker</h2>
      <form onSubmit={addExpense}>
        <input
          type="text"
          placeholder="Expense Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add Expense</button>
      </form>
      <ul>
        {expenses.map((exp, idx) => (
          <li key={idx}>
            {exp.name}: ${exp.amount.toFixed(2)}
          </li>
        ))}
      </ul>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}

export default App;
