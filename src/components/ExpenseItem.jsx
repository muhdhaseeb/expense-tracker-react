function ExpenseItem({ expense, deleteExpense }) {
  return (
    <li>
      {expense.name} - ₹{expense.amount}
      <button className="delete-btn" onClick={() => deleteExpense(expense.id)}>❌</button>
    </li>
  );
}

export default ExpenseItem;
