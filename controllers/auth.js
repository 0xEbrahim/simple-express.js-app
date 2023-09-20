const User = require('../database/schemas/user')
const { hashPassword , comparePassword } = require('../utils/helper')

const login = async (req , res) => {
    const { email , password } = req.body;
    const findEmail = await User.findOne({email});
    if(findEmail){
        const {password : hashedPassword} = findEmail;
        if(comparePassword(password, hashedPassword)){
            req.session.user = findEmail;
            console.log("Authentication Successfully");
            res.send(200);
        } else{
            console.log("Authentication Failed")
            res.status(401).send({msg : "Wrong username or password."});
        }
    }else{
        res.send(400);
    }
}


const signUp = async (req, res) => {
    const {username, email} = req.body;
    const userDB = await User.findOne({ email })
    if(userDB){
        res.status(400).send({msg : "user already exist"});
    }else{
        const hashedPassword = hashPassword(req.body.password);
        console.log(hashedPassword)
        const newUser = await User.create({username, password : hashedPassword, email});
        res.send(201);
    }
}


module.exports = {
    login,
    signUp
}