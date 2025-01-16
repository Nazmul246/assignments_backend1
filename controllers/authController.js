const jwt = require('jsonwebtoken');

exports.generateToken = (req, res) => {
    const token = jwt.sign({ id: 1, name: "User" }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
};

exports.postResponse = (req, res) => {
    res.send('I am post body');
};
