const { default: User } = require("../models/user.model");
const bcrypt = require('bcryptjs')

const signup = async (req, res) => {
    const {username, password, email} = req.body;

    if (!username || !password || !email || username==='' || password==='' || email==='') {
        return res.status(400).json({message: "All fields are required"})
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

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
        res.status(500).json({message: error.message})
    }

    

}

module.exports = signup