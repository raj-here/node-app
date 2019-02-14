const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './my-uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        if (file.mimetype !== ('application/json' || 'JSON' || 'json')) {
            return cb({ code: 'Please Upload josn only' });
        }
        cb(null, true);
    }
});

module.exports = upload;