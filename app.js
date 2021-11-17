const express = require('express');
const port = process.env.PORT || 3454;
const app = express();

app.set('/', (req, res) => {
    res.send('<h1>Dream Food</h1>')
})

app.listen(port);

