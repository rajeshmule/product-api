const express = require('express');
const dotEnv = require('dotenv');

dotEnv.config();

const app = express();

app.get('/', (req,res, next)=>{
    res.send("hello")
})

const port = process.env.PORT || 3000;

app.listen(port, () => {console.log(`Server listening on port ${port}`)});