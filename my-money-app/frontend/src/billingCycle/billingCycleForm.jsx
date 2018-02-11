import React, { Component } from 'react'
import { reduxForm, Field, destroy, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init } from './billingCycleActions'
import ItemList from './itemList'
import LabelAndInput from '../common/form/labelAndInput'

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit, readOnly, credits, debits } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field
                        name='name'
                        component={LabelAndInput}
                        cols='12 4'
                        label='Nome'
                        placeholder='Informe o nome'
                        type='text'
                        readOnly={readOnly} />
                    <Field
                        name='month'
                        component={LabelAndInput}
                        cols='12 4'
                        label='Mês'
                        placeholder='Informe o mês'
                        type='number'
                        readOnly={readOnly} />
                    <Field
                        name='year'
                        component={LabelAndInput}
                        cols='12 4'
                        label='Ano'
                        placeholder='Informe o ano'
                        type='number'
                        readOnly={readOnly} />
                    <ItemList
                        list={credits}
                        cols='12 6'
                        readOnly={readOnly}
                        legend='Créditos'
                        field='credits' />
                    <ItemList
                        list={debits}
                        cols='12 6'
                        readOnly={readOnly}
                        legend='Débitos'
                        field='debits' 
                        showStatus={true} />
                </div>
                <div className="box-footer">
                    <button className={`btn btn-${this.props.submitClass}`} type="submit">{this.props.submitLabel}</button>
                    <button className="btn btn-default" type="button" onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({ credits: selector(state, 'credits'), debits: selector(state, 'debits') })
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm) 