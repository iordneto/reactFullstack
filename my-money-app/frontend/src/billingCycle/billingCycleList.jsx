import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getList } from './billingCycleActions'

class BillingCycleList extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
            </tr>
        ))
    }

    render() {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Mês</th>
                        <th>Ano</th>
                    </tr>
                </thead>
                <tbody>
                   {this.renderRows()}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => ({ list: state.billingCycle.list })
const mapDispacthToProps = dispatch => bindActionCreators({ getList }, dispatch)
export default connect(mapStateToProps, mapDispacthToProps)(BillingCycleList)