import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'

import { showTabs, selectTab } from '../common/tab/tabActions'
import billingCycle from './billingCycle';

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = { credits:[{}], debits:[{}] }

export const getList = () => {
    const request = axios.get(`${BASE_URL}/billingCycles`)

    return ({
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    })
}

export const submit = (values, method) => {
    return dispatch => {
        const id = values._id ? values._id : '' 
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Sua ação foi realizada com sucesso!')
                dispatch(init())
            })
            .catch(e => e.response.data.errors.forEach(erro => {
                toastr.error('Erro', erro)
            }))
    }
}

export const create = (values) => {
    return submit(values, 'post')
}

export const update = (values) => {
    return submit(values, 'put')
}

export const remove = (values) => {
    return submit(values, 'delete')
}

export const showUpdate = (billingCycle) => {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export const showDelete = (billingCycle) => {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export const init = () => ([
    showTabs('tabList', 'tabCreate'),
    selectTab('tabList'),
    getList(),
    initialize('billingCycleForm', INITIAL_VALUES)

])