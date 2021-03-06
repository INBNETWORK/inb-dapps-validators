import React, { Component } from 'react'
import ValidatorPhysicalAddresses from './ValidatorPhysicalAddresses'

class Validator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      confirmation: null
    }
    this.props.metadataContract.getConfirmations({ miningKey: this.props.address }).then(confirmation => {
      this.setState({ confirmation: confirmation[0] })
    })
  }

  render() {
    let {
      physicalAddresses,
      address,
      firstName,
      lastName,
      licenseId,
      expirationDate,
      createdDate,
      updatedDate,
      index,
      children
    } = this.props

    const showAllValidators = this.props.methodToCall === 'getAllValidatorsData'

    const confirmations = showAllValidators ? (
      ''
    ) : (
      <div className="validators-header--confirmations">{this.state.confirmation} confirmations</div>
    )

    const indexAndAddress = showAllValidators ? `#${index}. ${address}` : address
    const pendingChangeDate = !updatedDate ? (
      ''
    ) : (
      <div className="validators-table-i">
        <p>Pending Change Date</p>
        <p>{updatedDate}</p>
      </div>
    )

    return (
      <div className="validators-i">
        <div className="validators-header">
          <div>
            <div className="validators-header--address">{indexAndAddress}</div>
            <div className="validators-header--hint">Адрес кошелька</div>
          </div>
          {confirmations}
        </div>
        <div className="validators-body">
          <div className="validators-notary left">
            <p className="validators-title validators-title--notary">Гражданин</p>
            <div className="validators-table">
              <div className="validators-table-i">
                <p>Полное Имя</p>
                <p>
                  {firstName} {lastName}
                </p>
              </div>
              <ValidatorPhysicalAddresses physicalAddresses={physicalAddresses} />
            </div>
          </div>
          <div className="validators-license right">
            <p className="validators-title  validators-title--notary-license">Лицензия</p>
            <div className="validators-table">
              <div className="validators-table-i">
                <p>Номер</p>
                <p>{licenseId}</p>
              </div>
              <div className="validators-table-i">
                <p>Дата окончания</p>
                <p>{expirationDate}</p>
              </div>
              <div className="validators-table-i">
                <p>Дата создания</p>
                <p>{createdDate}</p>
              </div>
              {pendingChangeDate}
            </div>
          </div>
        </div>
        <div className="validators-footer">{children}</div>
      </div>
    )
  }
}
export default Validator
