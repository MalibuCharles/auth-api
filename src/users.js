const {connectDb} = require('./dbConnect')

exports.createUser = (req, res) => {
    // first vaildation (email,password)
if(!req.body || !req.body.email || !req.body.password){
    // invaild request
    res.status(400).send('Invalid request')
    return
}
const newUser = {
    email: req.body.email,
    password: req.body.password,
    isAdmin: false,
    userRole:5,
}
const db = connectionDb()
db.collection('users').add(newUser)
.then(doc => {
    res.status(201).send('Account created')
})
.catch(err => res.status(500).send(err))

}