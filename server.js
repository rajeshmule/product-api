const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');

dotEnv.config();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/', (req,res, next)=>{
    res.send("hello")
});

const port = process.env.PORT || 3000;

app.listen(port, () => {console.log(`Server listening on port ${port}`)});

app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).send({status: 500, message: err.message, body: {}});
});