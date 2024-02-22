const express = require('express')
const router = express.Router()
const db = require('../Connections/database')

router.post('/user-register', (req, res) => {
    const query = "INSERT INTO admins (name, emailid, password) VALUES (?,?,?)"
    const values = [req.body.user_name, req.body.email_id, req.body.password]
    db.execute(query, values)
        .then((result) => {
            res.status(200).json({status:true,data:'User Registeration Succesfully'})
        })
        .catch((e) => {
            if(e.code == 'ER_DUP_ENTRY')
            res.status(500).json({status:false,data:'User Already Exist'})
            else
            res.status(500).json({status:false,data:'Server Error'})
        })
})

module.exports = router;