const express = require('express');
require('./db');
const userRouter = require('./routers/user');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use(cors())
app.use(userRouter)

app.get('/', (req, res) => {
    res.send('<h2>This is from index.js file</h2>');
});

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});