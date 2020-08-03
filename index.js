var express = require('express');
var app = express();


app.get('/', (req, res) => {
    console.log('Bye, see you again');
});

app.listen(3000, () => {
    console.log('Server is listening at: 127.0.0.1:3000');
});