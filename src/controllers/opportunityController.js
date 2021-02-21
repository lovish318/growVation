const connection= require('../db/db')


exports.getOpportunities =async(req,res)=>{
    try {
    await connection.query('SELECT companies.name, opportunities.oid,opportunities.title,opportunities.location FROM opportunities INNER JOIN companies ON companies.cid = opportunities.cid WHERE is_Job=?;',[req.params.is_Job],(results,error)=>{
        if(error){
            console.log(error)
            res.json(error)
        }
        else{
            console.log(results)
            res.json(results)
        }
    })
    } catch (error) {
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

