const db = require('../Connections/database')

exports.addExpense = (req, res) => {
    db.execute("INSERT INTO expense (expense_name, description, amount) VALUES (?,?,?)", [req.body.expense_name, req.body.description, req.body.amount])
        .then((result) => {
            res.status(200).json({ status: true, data: 'Expense Added Successfully' })
        })
        .catch((e) => {
            console.log(e);
            res.status(500).json({ status: false, data: 'server error' })
        })
}

exports.getExpense = (req,res)=>{
    db.execute("SELECT * FROM expense")
        .then((result) => {
            res.status(200).json({status:true,data:result[0]})
        })
        .catch((e)=>{
            res.status(500).json({status:false,data:'server error'})
        })
}