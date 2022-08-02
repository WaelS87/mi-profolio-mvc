const express = require('express');
const app = express();
const mainRouter=require('./routers/main')



app.use('/',mainRouter)
app.use(express.static('public'));

app.listen(3000,()=>console.log('Servidor funcionando'));