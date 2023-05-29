const express = require('express');
const fantsyRoute = require("./routes/fantasy");
const romanceRoute = require("./routes/romance");
const aouthRoute = require("./routes/auth");
const bookRoute = require("./routes/books");
const cookieParser = require('cookie-parser')
const session = require("express-session")

require("./database")

const app = express();
const port = 3001;



//middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser())


// prevent CORS error 
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
  });


//session 
app.use(
    session({
        secret: 'no one knows my key ever',
        resave: false,
        saveUninitialized: false,
    })
)
app.use("/api/v1/auth", aouthRoute);

// connection test
app.get("/api/v1",(req,res)=>{
    res.send("api conect")
})
//if no user is log in - all the routh (except for aouth above) can't be acces.
// app.use((req,res,next)=>{
//     if(req.session.user) next();
//     else res.send(401);
// })


app.use("/api/v1/fantasy", fantsyRoute);
app.use("/api/v1/romance", romanceRoute);
app.use("/api/v1/books", bookRoute);


app.listen(port, () => console.log(`Running at ${port} `));