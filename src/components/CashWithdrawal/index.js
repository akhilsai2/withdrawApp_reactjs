import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  withdraw = value => {
    this.setState(prevState => ({
      amount: prevState.amount - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    return (
      <div className="bgContainer">
        <div className="container">
          <div className="profileContainer">
            <div className="picture">
              <p className="profilePic">S</p>
            </div>
            <p className="Name">Sarah Williams</p>
          </div>
          <div className="balanceContainer">
            <p className="balanceName">Your balance</p>
            <div className="balanceCheck">
              <p className="Amount">{amount}</p>
              <p className="Currency">in Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="denomination">CHOOSE SUM (IN RUPEES)</p>
          <ul className="rupeeContainer">
            {denominationsList.map(each => (
              <DenominationItem
                item={each}
                key={each.id}
                amountDeduction={this.withdraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
