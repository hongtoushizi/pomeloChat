/**
 * Created by yuan on 15/10/15.
 */
exports.index = function (req, res, next) {
    console.log("gggg----999999-8888-");
    res.render('index', {
        test:"test"
    })
}



exports.test = function (req, res, next) {
    console.log("gggg0000----");
    res.render('index', {
        test:"test"
    })
}