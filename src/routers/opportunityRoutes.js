import {Routers} from 'express'
const Router = require('express').Routers()
const controller = require('../controllers/opportunityController')

Router.get('/opportunity/:is_Job',controller.getOpportunities)
Router.get('/opportunity/:id',controller.getOpportunityDetail)

module.exports=Router