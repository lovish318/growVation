const express = require('express')
const opportunityRoutes = require('./routers/opportunityRoutes')

const app = express()

app.use('/',opportunityRoutes)
app.listen(3030,()=>{console.log('Listening to port 3030')})