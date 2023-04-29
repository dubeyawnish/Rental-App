const express = require('express');
const router = express.Router();

const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    },
  })
  
  const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 1
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return res.status(400).json({error: "File types allowed .jpeg, .jpg and .png!"})
            
        }
    }
})


router.post('/uploadFile', upload.single('file'), function (req, res) {
    res.json({"fileName": req.file.filename})
})

const downloadFiles = (req, res) => {
    const fileName = req.params.fileName;
    const path = __basedir + "/uploads/";
  //console.log(fileName)
    res.download(path + fileName, (err) => {
      if (err) {
        res.status(500).send({
          message: "File can not be downloaded: " + err,
        });
      }
    });
};

router.get("/files/:fileName", downloadFiles)

module.exports = router;