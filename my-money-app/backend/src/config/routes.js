const express = require('express')

module.exports = function(server) {
    const router = express.Router()
    server.use('/api', router)

    const BilliingCycle = require('../api/billingCycle/billingCycleService')
    BilliingCycle.register(router, '/billingCycles')
}