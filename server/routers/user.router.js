const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// eslint-disable-next-line new-cap
const router = require('express').Router();
const User = require('../models/user.model');
const config = require('../utils/config');
const { authenticateToken } = require('../utils/middleware');

router.get('/all', authenticateToken, async (req, res) => {
    const users = await User.find({});
    res.json(users);
});

router.get('/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    const specificUser = User.findById(id);
    if (specificUser) {
        res.status(200).json(specificUser);
    } else {
        res.status(404).end();
    }
});

router.post('/register', async (req, res, next) => {
    const { email, username, password } = req.body;

    const isUserExisting = await User.findOne({ username });

    if (isUserExisting) {
        const duplicateError = new Error(`${username} already taken!`);
        duplicateError.status = 400;
        next(duplicateError);
        return;
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
        email,
        username,
        password: passwordHash,
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json({
            userData: savedUser,
            message: 'Registration Success!',
        });
    } catch (error) {
        error.status = 403;
        next(error);
    }
});

router.post('/login', async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const passwordCheck = user === null ? false : await bcrypt.compare(password, user.password);

    if (!(user && passwordCheck)) {
        const credentialError = new Error('Invalid email or password');
        credentialError.status = 401;
        next(credentialError);
        return;
    }

    const userForToken = {
        email: user.email,
        id: user._id,
    };

    const authToken = jwt.sign(userForToken, config.TOKEN_SECRET, {
        expiresIn: '2h',
    });

    res.json({
        authToken,
        message: 'Login Success!',
    });
});

module.exports = router;