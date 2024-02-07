const { default: User } = require("../models/user.model");
const bcrypt = require('bcryptjs');
const errorHandler = require("../utls/error");

const signup = async (req, res, next) => {
    const {username, password, email} = req.body;

    if (!username || !password || !email || username==='' || password==='' || email==='') {
        next(errorHandler(400, 'All fields are required'))
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    });

    try {
        await newUser.save();
    res.json("SignUp successfull")
    }
    catch (error) {
        next(error)
    }

    

}

module.exports = signup