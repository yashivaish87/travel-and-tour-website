import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


//user registration
export const register = async (req, res) => {
    try {
        
        //hashing pwd
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);


        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            photo: req.body.photo
        });

        await newUser.save();
        res.status(200).json({success:true, message: "User registered successfully!"});

    } catch (error) {

        res.status(500).json({success:false, message: error.message});
        
    }
}
 
//user login
export const login = async (req, res) => {

    const email = req.body.email;

    try {
        const user = await User.findOne({ email })

        //if user does not exist
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found!" });
        }

        //if user is exist then check or compare the password
        const checkCorrectPassword = bcrypt.compare(req.body.password, user.password);

        //if password is incorrect
        if (!checkCorrectPassword) {
            return res.status(401).json({ success: false, message: "Password or Email is incorrect!" });
        }

        const { password, role, ...rest } = user._doc;

        //create jwt token
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn: "15d" });
        
        //set token in browser cookie and send response
        res.cookie('accessToken', token, {
            httpOnly: true,
            expires: token.expiresIn
        }).status(200).json({ success: true, message: "User logged in successfully!", data: {...rest} });

    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to login!" });
        
    }
 }