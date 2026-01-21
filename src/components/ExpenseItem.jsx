function ExpenseItem({ expense, deleteExpense }) {
  return (
    <li>
      {expense.name} - ₹{expense.amount}
      <button onClick={() => deleteExpense(expense.id)}>❌</button>
    </li>
  );
}

export default ExpenseItem;
