const Razorpay = require('razorpay')
const db = require('../Connections/database')

exports.purchase = (req, res) => {
    try {
        const rzp = new Razorpay({
            key_id: 'rzp_test_3Kc1gPlleYmTpO',
            key_secret: 'TpoqUHAG2F0RcY9Ns4PA90sm'
        })

        const amount = 5000

        rzp.orders.create({ amount, currency: "INR" }, (err, order) => {
            if (err) {
                res.status(500).json({ status: false, data: 'RazorPay Error' })
            }
            else {
                db.execute("INSERT INTO orders (orderid, status) VALUES (?,?)", [order.id, 'PENDING'])
                    .then((result) => {
                        res.status(200).json({ status: true, order, key_id: rzp.key_id })
                    })
                    .catch((e) => {
                        res.status(500).json({ status: false, data: 'Database Error' })
                    })
            }
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, data: 'Server Error' })
    }
}