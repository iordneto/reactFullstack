import React, { Component } from 'react'
import Axios from 'axios'

import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import ValueBox from '../common/template/widget/valueBox'
import Row from '../common/template/row'

const URL = 'http://localhost:3003/api'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = { credit: 0, debit: 0}
    }

    componentWillMount(){
        Axios.get(`${URL}/billingCycles/summary`)
            .then(resp => this.setState(resp.data))
    }

    render() {
        const {credit, debit} = this.state
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