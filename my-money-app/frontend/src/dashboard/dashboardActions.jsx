import Axios from 'axios'

const URL = 'http://localhost:3003/api'

export const getSummary = () => {
    const request = Axios.get(`${URL}/billingCycles/summary`)
    return({
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    })
}