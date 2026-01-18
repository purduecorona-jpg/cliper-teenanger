const express = require('express');
const cors = require('cors');
const stripeRoute = require('./routes/stripe');
const usersRoute = require('./routes/users');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/stripe', stripeRoute);
app.use('/users', usersRoute);

app.get('/', (req, res) => res.send('Clipper Teenager Backend działa!'));

app.listen(3000, () => console.log('Server działa na http://localhost:3000'));
