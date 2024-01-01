import './index.css'

const HistoryItems = props => {
  const {listItem, itemDeleteFun} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = listItem

  const deleteItem = () => {
    itemDeleteFun(id)
  }
  return (
    <li className="item-card">
      <p className="time">{timeAccessed}</p>
      <div className="img-text-card">
        <img src={logoUrl} className="app-image" alt="domain logo" />
        <div className="text-delete-card">
          <div className="text-card">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
          <button
            type="button"
            className="delete-button"
            onClick={deleteItem}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="delete-icon"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default HistoryItems
