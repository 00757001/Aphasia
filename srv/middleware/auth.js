module.exports = {
    //確保沒登入不能使用其他功能
    ensureAuth: function(req, res, next) {
        if(req.isAuthenticated()){
            return next();
        }else{
            // res.redirect('http://localhost:8080/login');
            res.status(401).json({ error: '尚未登入' })
        }
    },
    //確保登入後不能使用登入功能
    ensureGuest: function(req, res, next) {
        if(req.isAuthenticated()){
            res.redirect('http://localhost:8080');
        }
        else{
            return next();
        }
    }
}