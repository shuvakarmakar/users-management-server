const express = require('express');
const app = express();
var cors = require('cors')
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const users = [
    { id: 1, name:'Shuva', email: 'shuva@gmail.com'},
    { id: 2, name:'Misty', email: 'misty@gmail.com'},
    { id: 3, name:'Rekha', email: 'rekha@gmail.com'}
]

app.get('/', (req, res) =>{
    res.send('User Management Server is Running')
})

app.get('/users', (req, res) =>{
    res.send(users)
})
app.post('/users', (req, res) =>{
    console.log('post api hitting');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser)
})

app.listen(port, () =>{
    console.log(`Server is running on PORT: ${port}`);
})