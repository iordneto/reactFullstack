import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import BillingCycle from '../billingCycle/billingCycle'
import Dashboard from '../dashboard/dashboard'

export default props => (
    <Router history={hashHistory}>
        <Route path='/billingCycles' component={BillingCycle} />
        <Route path='/' component={Dashboard} />
        <Redirect from='*' to='/' />
    </Router>
)