const jwt = require("jsonwebtoken");

// Function for validating the JWT sent by the frontend
module.exports = function(req, res, next) {
    const authHeader = req.headers["authorization"];
    let token;
    if (authHeader) {
        token = authHeader.split(" ")[1];
    } else {
        token = null;
    }
    if (token == null) {
        return res.sendStatus(401);
    } else {
        jwt.verify(token, process.env.SECRET, 
        function(err, user) {
            if (err) {
                return res.sendStatus(401);
            }
            req.user = user;
            next();
        });
    }
}