const express = require('express');
const app = express();
app.get('/',(req,res)=>res.send('Welcome aws node!'));

const port = process.env.port || 3000;
//const port = 3000;
app.listen(port,()=> {
console.log('Node REST API Server on post 3000!');
});
