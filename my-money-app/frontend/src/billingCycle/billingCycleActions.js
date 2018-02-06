import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'

import { showTabs, selectTab } from '../common/tab/tabActions'
import billingCycle from './billingCycle';

const BASE_URL = 'http://localhost:3003/api'

export const getList = () => {
    const request = axios.get(`${BASE_URL}/billingCycles`)

    return ({
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    })
}

export const create = (values) => {
    return dispatch => {
        axios.post(`${BASE_URL}/billingCycles`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Seu ciclo de pagamento foi incluído com sucesso!')
                dispatch([
                    resetForm('billingCycleForm'),
                    showTabs('tabList', 'tabCreate'),
                    selectTab('tabList'),
                    getList()
                ])
            })
            .catch(e => e.response.data.errors.forEach(erro => {
                toastr.error('Erro', erro)
            }))
    }
}

export const showUpdate = (billingCycle) => {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}