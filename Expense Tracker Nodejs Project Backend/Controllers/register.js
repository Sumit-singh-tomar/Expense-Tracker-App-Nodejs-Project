const db = require('../Connections/database')
const bcrypt = require('bcrypt')

exports.userRegisteration = (req, res) => {
    const query = "INSERT INTO admins (name, emailid, password) VALUES (?,?,?)"
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        console.log('hasherror', err);
        console.log('hash', hash);
        db.execute(query, [req.body.user_name, req.body.email_id, hash])
            .then((result) => {
                res.status(200).json({ status: true, data: 'User Registeration Succesfully' })
            })
            .catch((e) => {
                if (e.code === 'ER_DUP_ENTRY')
                    res.status(500).json({ status: false, data: 'User Already Exist' })
                else
                    res.status(500).json({ status: false, data: 'Server Error' })
            })
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
                bcrypt.compare(req.body.password, result[0][0].password, (err, response) => {
                    if(err)
                    res.status(401).json({ status: false, data: 'User not Authorized, Incorrect Password' })
                    else
                    res.status(200).json({ status: true, data: result[0] })

                })

            }
        })
        .catch((e) => {
            res.status(500).json({ status: false, data: 'server error' })
        })
}