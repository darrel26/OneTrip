const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// eslint-disable-next-line new-cap
const router = require('express').Router();
const User = require('../models/user.model');
const config = require('../utils/config');

router.get('/all', async (req, res) => {
    const users = await User.find({});
    res.json(users);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const specificUser = User.findById(id);
    if (specificUser) {
        res.status(200).json(specificUser);
    } else {
        res.status(404).end();
    }
});

router.post('/register', async (req, res) => {
    const { email, username, password } = req.body;

    const isUserExisting = await User.findOne({ username });

    if (isUserExisting) {
        return res.status(400).json({
            error: 'username must be unique',
        });
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
        email,
        username,
        password: passwordHash,
    });

    const savedUser = await newUser.save();
    return res.status(201).json({
        userData: savedUser,
        message: 'Registration Success!',
    });
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const passwordCheck = user === null ? false : await bcrypt.compare(password, user.password);

    if (!(user && passwordCheck)) {
        return res.status(401).json({
            error: 'invalid email or password!',
        });
    }

    const userForToken = {
        email: user.email,
        id: user._id,
    };

    const authToken = jwt.sign(userForToken, config.TOKEN_SECRET, {
        expiresIn: '2h',
    });

    return res.json({
        authToken,
        message: 'Login Success!',
    });
});

module.exports = router;