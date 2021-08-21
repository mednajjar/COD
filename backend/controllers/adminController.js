const User = require('../models/User');
const bcrypt = require('bcrypt');
const { validationRegister, validationUpdateUser } = require('../validation/validationForm')

/**
 * @param get all users
 */

exports.getUsers = async (req, res) => {
    try {
        const user = await User.find({ role: 'user' }).select('-password')
        if (user) return res.status(200).json(user)
    } catch (err) {
        throw err;
    }
}

/**
 * @param create user
 * @param check validation form by joi
 * @param hash password by bcrypt
 */

exports.createUser = async (req, res) => {
    const { error } = validationRegister(req.body);
    if (error) return res.status(400).json(error.details[0].message);
    try {
        const { email, password, confirmPassword } = req.body;
        const user = new User({
            ...req.body
        })
        const emailExist = await User.findOne({
            email
        });
        if (emailExist) return res.json('Email already used!');
        // check confirmation password if you use it on form
        // if(password !== confirmPassword) return res.status(400).send('confirmation password not match to origin!');
        const hashPass = await bcrypt.hash(password, 12);
        if (hashPass) user.password = hashPass;
        const save = user.save();
        if (save) res.status(201).json('user created!');
    } catch (err) {
        throw err;
    }
}

/**
 * @param update user
 * @param check validation form by joi
 * @param hash given password
 */

exports.updateUser = async (req, res) => {
    const { error } = validationUpdateUser(req.body);
    if (error) return res.status(400).json(error.details[0].message);
    try {
        if (req.body.password) {
            const hashPass = await bcrypt.hash(req.body.password, 12);
            if (hashPass) req.body.password = hashPass;
        }
        const updateUser = await User.updateOne({ _id: req.params.id }, { ...req.body });
        if (updateUser) return res.status(201).json('user updated successfully');
    } catch (err) {
        throw err;
    }
}

/**
 * @param delete user by id
 */

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.deleteOne({ _id: req.params.id });
        if (user) return res.status(200).json('user deleted');
    } catch (err) {
        throw err;
    }
}

