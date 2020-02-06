// app.js

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
const routes = require('./routes/api/userdatas.js')
app.use('/api', routes)
connectDB();

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 3003;

app.listen(port, () => console.log(`Server running on port ${port}`));