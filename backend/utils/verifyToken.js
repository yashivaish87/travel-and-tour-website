import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken;

    if (!token) return res.status(401).json({ success: false, message: "Access denied!" });

    //if token exist then verify it
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) return res.status(401).json({ success: false, message: "Token is not valid!" });
        req.user = user;
        next(); //dont forget to call next
    })
}

export default verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (re.user.id === req.params.id || req.user.role === 'admin') {
            next();
        }
        else {
            res.status(401).json({ success: false, message: "You are not authorized!" });
        }
    })
}