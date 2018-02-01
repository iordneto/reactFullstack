import { combineReducers } from 'redux'

import DashboardReducer from '../dashboard/dasboardReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer
})

export default rootReducer