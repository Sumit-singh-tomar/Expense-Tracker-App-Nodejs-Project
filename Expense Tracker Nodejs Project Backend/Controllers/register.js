const db = require('../Connections/database')

exports.userRegisteration = (req, res) => {
    const query = "INSERT INTO admins (name, emailid, password) VALUES (?,?,?)"
    const values = [req.body.user_name, req.body.email_id, req.body.password]
    db.execute(query, values)
        .then((result) => {
            res.status(200).json({ status: true, data: 'User Registeration Succesfully' })
        })
        .catch((e) => {
            if (e.code == 'ER_DUP_ENTRY')
                res.status(500).json({ status: false, data: 'User Already Exist' })
            else
                res.status(500).json({ status: false, data: 'Server Error' })
        })
}

exports.loginUser = (req, res) => {
    const query = "SELECT * FROM admins WHERE emailid = ?";
    const values = [req.body.email_id]
    db.execute(query, values)
        .then((result) => {
            if (result[0].length === 0) {
                res.status(404).json({ status: false, data: 'User Not Found' })
            }
            else {
                if (result[0][0].password == req.body.password) {
                    res.status(200).json({ status: true, data: result[0] })
                }
                else{
                    res.status(401).json({status:false,data:'User not Authorized, Incorrect Password'})
                }
            }
        })
        .catch((e) => {
            res.status(500).json({ status: false, data: 'server error' })
        })
}