const Film = require('../model/index');

class SiteController {
    // Load ra tất cả dữ liệu
    index(req, res, next) {
        Film.find()
            .then((films) => {
                res.send(films);
            })
            .catch(next);
    }
}
module.exports = new SiteController();
