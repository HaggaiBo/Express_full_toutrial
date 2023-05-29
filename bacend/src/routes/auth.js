const Router = require('express');
const { hashPassword, comparePassword } = require("../utils/helpers")
const User = require("../database/schemas/user");
router = Router()


router.post('/login',async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.send(400);
    const userDB= await User.findOne({email});
    if(!userDB) return res.send(401);
    const isValid= comparePassword(password,userDB.password);
    if(isValid){
        req.session.user=userDB;
        return  res.send(200);
        
    }else{
        return res.send(401);
    }
      


})

router.post('/register', async (req, res) => {
    const { firstname,lastname, email } = req.body;
    // chack if user already exists 
    const userDB = await User.findOne({ email});
    if (userDB) {
        res.status(400).send({ msg: "user alredy exists" })
    } else {

        const password = hashPassword(req.body.password);
        console.log(password);
        const newUser = await User.create({ firstname,lastname, password, email });
        res.send(201);
    }
})



module.exports = router;