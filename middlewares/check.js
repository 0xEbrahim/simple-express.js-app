exports.check = (req, res , next) => {
    console.log(`${req.method} : ${req.url}`);
    next();
}

