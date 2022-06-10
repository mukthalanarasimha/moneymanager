import './index.css'

const TransactionItem = Props => {
  const {TransactionItemDetails, updatedTheAmount} = Props
  const {id, title, amount, type} = TransactionItemDetails

  const onClickToDeleteTheHistory = () => {
    updatedTheAmount(id)
  }
  return (
    <li className="table_row">
      <div className="history_aligh">
        <p>{title}</p>
        <p>{amount}</p>
        <p>{type}</p>
      </div>
      <div>
        <button type="button" onClick={onClickToDeleteTheHistory}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="deleteIcon"
          />
        </button>
      </div>
    </li>
  )
}
export default TransactionItem
