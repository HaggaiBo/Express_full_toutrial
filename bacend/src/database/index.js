const mongoose=require('mongoose');


mongoose
.connect('mongodb://127.0.0.1:27017/newdb')
.then(console.log('DB conected'))
.catch((err)=>console.log(err));