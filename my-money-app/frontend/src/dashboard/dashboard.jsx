import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import ValueBox from '../common/template/widget/valueBox'
import Row from '../common/template/row'

import { getSummary } from './dashboardActions'

class Dashboard extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount(){
        this.props.getSummary()
    }

    render() {
        const {credit, debit} = this.props.summary
        return (
            <div>
                <ContentHeader title='DashBoard' subtitle='Versão 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' value={`R$ ${credit}`} text="Total de créditos" icon='bank' />
                        <ValueBox cols='12 4' color='red'  value={`R$ ${debit}`} text="Total de débitos" icon='credit-card' />
                        <ValueBox cols='12 4' color='blue'  value={`R$ ${credit - debit}`} text="Total consolidado" icon='money' />
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({summary: state.dashboard.summary}) 
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch) 
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)