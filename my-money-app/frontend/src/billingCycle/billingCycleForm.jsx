import React, { Component } from 'react'
import { reduxForm, Field, destroy } from 'redux-form'

import labelAndInput from '../common/form/labelAndInput'

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field
                        name='name'
                        component={labelAndInput}
                        cols='12 4'
                        label='Nome' 
                        placeholder='Informe o nome'
                        type='text' />
                    <Field
                        name='month'
                        component={labelAndInput}
                        cols='12 4'
                        label='Mês' 
                        placeholder='Informe o mês'
                        type='number' />
                    <Field
                        name='year'
                        component={labelAndInput}
                        cols='12 4'
                        label='Ano' 
                        placeholder='Informe o ano'
                        type='number' />
                </div>
                <div className="box-footer">
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)