import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

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

      <ExpenseForm
        name={name}
        amount={amount}
        setName={setName}
        setAmount={setAmount}
        addExpense={addExpense}
      />

      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />

      <h3>
        Total: ₹{expenses.reduce((sum, e) => sum + e.amount, 0)}
      </h3>
    </div>
  );
}

export default App;
