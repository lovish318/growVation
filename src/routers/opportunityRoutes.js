
const Router = require('express').Router()
const controller = require('../controllers/opportunityController')

Router.get('/opportunity/:is_Job',controller.getOpportunities)
Router.get('/opportunity/:id',controller.getOpportunityDetail)

module.exports=Router