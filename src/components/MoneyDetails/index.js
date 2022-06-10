import './index.css'

const MoneyDetails = Props => {
  const {BalanceAmount, incomeAmount, expensesAmount} = Props
  return (
    <li>
      <div className="Balance_container_big">
        <div className="Balance_container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            className="image_container"
            alt="balance"
          />
          <div className="amount_and_balance">
            <p>Your Balance</p>
            <p className="balance_paragragh" testid="balanceAmount">
              {BalanceAmount}
            </p>
          </div>
        </div>
        <div className="Balance_container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            className="image_container"
            alt="income"
          />
          <div className="amount_and_balance">
            <p>Your Income</p>
            <p className="balance_paragragh" testid="incomeAmount">
              {incomeAmount}
            </p>
          </div>
        </div>
        <div className="Balance_container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            className="image_container"
            alt="expenses"
          />
          <div className="amount_and_balance">
            <p>Your Expenses</p>
            <p className="balance_paragragh" testid="expensesAmount">
              {expensesAmount}
            </p>
          </div>
        </div>
      </div>
    </li>
  )
}
export default MoneyDetails
