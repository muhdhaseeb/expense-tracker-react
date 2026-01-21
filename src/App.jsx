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

  function deleteExpense(id) {
    const updatedExpenses = expenses.filter(
      (expense) => expense.id !== id
    );
    setExpenses(updatedExpenses);
  }

  return (
    <div>
      <h1>Expense Tracker</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Expense name"
      />

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />

      <button onClick={addExpense}>Add Expense</button>

      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.name} - ₹{expense.amount}
            <button onClick={() => deleteExpense(expense.id)}>❌</button>
          </li>
        ))}
      </ul>

      <h3>
        Total: ₹{expenses.reduce((sum, e) => sum + e.amount, 0)}
      </h3>
    </div>
  );
}

export default App;
