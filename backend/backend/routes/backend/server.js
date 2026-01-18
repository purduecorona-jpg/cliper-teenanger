const express = require('express');
const cors = require('cors');
const app = express();
const stripeRoute = require('./routes/stripe');
app.use(cors());
app.use(express.json());

app.use('/stripe', stripeRoute);

app.get('/', (req, res) => res.send('TikTok Clone Backend działa!'));

app.listen(3000, () => console.log('Server działa na http://localhost:3000'));
