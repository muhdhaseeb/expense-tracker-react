import { useState, useEffect } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const storedExpenses = localStorage.getItem("expenses");
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
  if (!loaded) return;
  localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses, loaded]);

  function addExpense() {
    if (name === "" || amount === "") return;

    const newExpense = {
      id: Date.now(),
      name,
      amount: Number(amount),
    };

    setExpenses([...expenses, newExpense]);
    setName("");
    setAmount("");
  }

  function deleteExpense(id) {
    setExpenses(expenses.filter((e) => e.id !== id));
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
        {expenses.map((e) => (
          <li key={e.id}>
            {e.name} - ₹{e.amount}
            <button onClick={() => deleteExpense(e.id)}>❌</button>
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
