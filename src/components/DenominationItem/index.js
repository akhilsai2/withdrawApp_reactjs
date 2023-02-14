import './index.css'

const DenominationItem = props => {
  const {item, amountDeduction} = props
  const {value} = item
  const decreaseAmount = () => {
    amountDeduction(value)
  }
  return (
    <li className="rupeeItem">
      <button className="button" type="button" onClick={decreaseAmount}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
