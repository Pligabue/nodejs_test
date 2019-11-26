let customMiddleware = {}

customMiddleware.isLoggedIn = (req, res, next) => {
    if (req.user) {
        next()
    } else {
        return res.status(401).send()
    }
}

customMiddleware.isAuthorized = (req, res, next) => {
    if (req.user) 
        if (req.user.id = req.body.userId) 
            next()
        else
            return res.status(403).send()
    else 
        return res.status(401).send()
}

module.exports = customMiddleware;