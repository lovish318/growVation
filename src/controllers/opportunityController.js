const connection= require('../db/db')


exports.getOpportunities =async(req,res)=>{
    try {connection.connect()
    const result =await connection.query('SELECT companies.name, opportunities.oid,opportunities.title,oppertunities.location FROM opportunities INNER JOIN companies ON companies.cid = opportunities.cid WHERE is_Job=$1;',[req.params.is_Job])
    //console.log(result)
    result.on('fields',(fields)=>{
        //console.log(fields)
    })
    connection.end()
    res.send('hello')} catch (error) {
        console.log(error)
        connection.end()
        res.send('hello')
    }
    
}
exports.getOpportunityDetail =async(req,res)=>{
    const result =await connection.query('SELECT * FROM opportunities INNER JOIN companies ON companies.cid = opportunities.cid WHERE oid=$1;',[req.params.id])
    res.json({
        data:result.rows[0],
        count:result.rowCount
    })
}

