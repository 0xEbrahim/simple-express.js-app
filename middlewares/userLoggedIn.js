const checkLoggedIn = (req, res, next) => {
    if(req.session.user)
        next();
    else
        res.send(401);
}

module.exports = { checkLoggedIn }