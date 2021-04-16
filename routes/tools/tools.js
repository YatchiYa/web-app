

exports.view = function (req, res) {
    return res.json({
        port: process.env.PORT
    });
}
