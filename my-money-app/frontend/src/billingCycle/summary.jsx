import React from 'react'

import Grid from '../common/template/grid'
import Row from '../common/template/grid'
import ValueBox from '../common/template/widget/valueBox'

export default ({ credit, debit }) => (
    <Grid cols='12'>
        <fieldset>
            <legend>Resumo</legend>
            <Row>
            <ValueBox cols='12 4' color='green' value={`R$ ${credit}`} text="Total de créditos" icon='bank' />
            <ValueBox cols='12 4' color='red'  value={`R$ ${debit}`} text="Total de débitos" icon='credit-card' />
            <ValueBox cols='12 4' color='blue'  value={`R$ ${credit - debit}`} text="Total consolidado" icon='money' />
            </Row>
        </fieldset>
    </Grid>
)