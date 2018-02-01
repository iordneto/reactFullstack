import React, { Component } from 'react'

import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='DashBoard' subtitle='Versão 1.0' />
                <Content>
                    Minha DashBoard
                </Content>
            </div>
        )
    }
}

export default Dashboard