const db = require('../Connections/database')

exports.addExpense = (req, res) => {
    db.execute("INSERT INTO expense (expense_name, amount, description, userid) VALUES (?,?,?,?)",
        [req.body.expense_name, req.body.amount, req.body.description, req.user[0].id])
        .then((result) => {
            res.status(200).json({ status: true, data: 'Expense Added Successfully' })
        })
        .catch((e) => {
            res.status(500).json({ status: false, data: 'server error' })
        })
}

exports.getExpense = (req, res) => {
    db.execute("SELECT * FROM expense WHERE userid = ?", [req.user[0].id])
        .then((result) => {
            res.status(200).json({ status: true, data: result[0] })
        })
        .catch((e) => {
            res.status(500).json({ status: false, data: 'server error' })
        })
}

exports.deleteExpense = (req, res) => {
    console.log(req.params);
    db.execute("DELETE FROM expense WHERE id = ? and userid = ?", [req.params.id, req.user[0].id])
        .then((result) => {
            res.status(200).json({ status: true, data: 'Expense Successfully Deleted' })
        })
        .catch((e) => {
            res.status(500).json({ status: false, data: 'server error' })
        })
}