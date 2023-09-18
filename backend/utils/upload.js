const { GridFsStorage } = require('multer-gridfs-storage');
const multer = require('multer');
const dotenv = require('dotenv');
dotenv.config();

const dbusername=process.env.DB_USERNAME;
const dbpassword=process.env.DB_PASSWORD;

const CONNECTION_URL =`mongodb+srv://${dbusername}:${dbpassword}@rentalapp.xjd7ueh.mongodb.net/?retryWrites=true&w=majority`;
const connectionOption = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const storage = new GridFsStorage({
  url: CONNECTION_URL,
  options: connectionOption,
  file: (request, file) => {
    const match = ['image/png', 'image/jpg', 'image/jpeg'];

    if (match.indexOf(file.mimetype) === -1) {
      return `${Date.now()}-dharni-${file.originalname}`;
    }

    return {
      bucketName: 'photos',
      filename: `${Date.now()}-dharni-${file.originalname}`,
    };
  },
});

const upload = multer({ storage });

module.exports = upload;