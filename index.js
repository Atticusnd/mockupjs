const express = require('express')
const request = require('request');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use((err, req, res, next) => {
    if (err) {
      return res.send(err);
    }
    next();
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})



