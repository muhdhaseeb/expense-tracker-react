import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  function addExpense() {
    if (name === "" || amount === "") {
      return;
    }

    const newExpense = {
      id: Date.now(),
      name: name,
      amount: Number(amount),
    };

    setExpenses([...expenses, newExpense]);
    setName("");
    setAmount("");
  }

  return (
    <div>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.name} - ₹{expense.amount}
          </li>
        ))}
      </ul>

      <h3>
        Total: ₹
        {expenses.reduce((sum, e) => sum + e.amount, 0)}
      </h3>
    </div>
  );
}

export default App;
