const grid = require('gridfs-stream');
const mongoose = require('mongoose');
const express = require('express');
const upload = require('../utils/upload.js');

const router = express.Router();
const url = 'http://localhost:5000';

let gfs, gridfsBucket;
const conn = mongoose.connection;
conn.once('open', () => {
  gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: 'photos',
  });
  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection('photos');
});

router.get('/file/:filename', async (request, response) => {
  try {
    const file = await gfs.files.findOne({ filename: request.params.filename });
    if (!file) {
        return response.status(404).json({ msg: 'File not found' });
      }
    const readStream = gridfsBucket.openDownloadStream(file._id);
    readStream.pipe(response);
  } catch (error) {
    response.status(500).json({ msg: error.message });
  }
});

router.post('/file/upload', upload.array('files', 15), async (request, response) => {
  if (!request.files || request.files.length === 0) {
    return response.status(404).json('Files not found');
  }

  const imageUrls = request.files.map((file) => `${url}/file/${file.filename}`);
  response.status(200).json(imageUrls);
});

module.exports = router;
