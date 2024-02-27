const db = require('../Connections/database')

exports.showLeaderBoard = async (req, res) => {
    try {
        const result = await db.execute("select users.id,users.name,expense.expense_name,sum(expense.amount) as amt from users left outer join expense ON users.id = expense.userid group by users.id order by amt desc")

        res.status(200).json({ status: true, data: result[0], msg:'succes' })
    }
    catch (e) {
        res.status(500).json({ status: false, data: 'Server Error' })
    }
}