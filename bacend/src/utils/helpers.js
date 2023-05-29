const bcrypt = require('bcryptjs');

const hashPassword=(passwoad)=>{
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(passwoad.toString(),salt);
}


const comparePassword=(raw,hash)=>{
    console.log("comparation");
    return bcrypt.compareSync(raw.toString(),hash);
}


module.exports={
    hashPassword,
    comparePassword
}