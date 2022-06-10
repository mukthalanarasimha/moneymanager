import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TransactionItemDetails from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    historyContainer: [],
    titleInput: '',
    amountInput: '',
    optionalId: transactionTypeOptions[0].optionId,
  }

  updatedTheAmount = id => {
    const {historyContainer} = this.state
    const upadateHistoryContainer = historyContainer.filter(
      eachTransaction => id !== eachTransaction.id,
    )
    this.setState({
      historyContainer: upadateHistoryContainer,
    })
  }

  addAmountToHistory = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionalId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionalId,
    )
    const {displayText} = typeOption
    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }
    this.setState(preSate => ({
      historyContainer: [...preSate.historyContainer, newTransaction],
      titleInput: '',
      amountInput: '',
      optionalId: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeClickOnInputTittle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeClickOnAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  getIncome = () => {
    const {historyContainer} = this.state
    let incomeAmount = 0
    historyContainer.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  getBalance = () => {
    const {historyContainer} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expenseAmount = 0
    historyContainer.forEach(eachTrasaction => {
      if (eachTrasaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTrasaction.amount
      } else {
        expenseAmount += eachTrasaction.amount
      }
      balanceAmount = incomeAmount - expenseAmount
      return balanceAmount
    })
  }

  getExpense = () => {
    const {historyContainer} = this.state
    let expenseAmount = 0
    historyContainer.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expenseAmount += eachTransaction.amount
      }
    })
    return expenseAmount
  }

  render() {
    const {titleInput, amountInput, optionalId, historyContainer} = this.state
    const BalanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpense()
    return (
      <div className="bg_total_managers_money">
        <div className="bg_containers_of_managers">
          <h1>Hi,Richard</h1>
          <p>
            Welcome back to your
            <span className="span_heading">Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          BalanceAmount={BalanceAmount}
          incomeAmount={incomeAmount}
          expensesAmount={expensesAmount}
        />
        <div className="form_and_history">
          <form className="form_container" onSubmit={this.addAmountToHistory}>
            <h1>Add Transaction</h1>
            <label htmlFor="title">TITLE</label>
            <input
              id="title"
              type="search"
              onChange={this.onChangeClickOnInputTittle}
              value={titleInput}
            />
            <label htmlFor="amount">AMOUNT</label>
            <input
              id="amount"
              type="search"
              onChange={this.onChangeClickOnAmount}
              value={amountInput}
            />
            <p>Type</p>
            <select onChange={this.OnchangeClickOnSelect} value={optionalId}>
              {transactionTypeOptions.map(eachOptiona => (
                <option
                  key={eachOptiona.optionId}
                  value={eachOptiona.displayText}
                >
                  {eachOptiona.displayText}
                </option>
              ))}
            </select>
            <div>
              <button className="add_button" type="submit">
                Add
              </button>
            </div>
          </form>
          <div className="history_container">
            <h1>History</h1>
            <ul className="history_container_add_history_data">
              <li className="history_container_add_history">
                <p lassName="history_type">Title</p>
                <p className="history_type">Amount</p>
                <p className="history_type">Type</p>
              </li>
              {historyContainer.map(eachTransaction => (
                <TransactionItemDetails
                  key={eachTransaction.id}
                  TransactionItemDetails={eachTransaction}
                  updatedTheAmount={this.updatedTheAmount}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
