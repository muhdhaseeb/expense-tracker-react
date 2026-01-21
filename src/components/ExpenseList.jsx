import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, deleteExpense }) {
  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense.id}>
          {expense.name} - ₹{expense.amount}
          <button onClick={() => deleteExpense(expense.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
