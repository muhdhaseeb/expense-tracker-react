function ExpenseForm({ name, amount, setName, setAmount, addExpense }) {
  return (
    <div>
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

      <button className="add-btn" onClick={addExpense}>Add Expense</button>
    </div>
  );
}

export default ExpenseForm;
