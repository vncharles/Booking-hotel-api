const fs = require('fs');
const path = require('path');

const storagePath = './images';

// Check and create storage folder if it doesn't exist
if (!fs.existsSync(storagePath)) {
  fs.mkdirSync(storagePath);
}

// Upload file
const uploadFile = (file) => {
  return new Promise((resolve, reject) => {
    const fileStream = fs.createReadStream(file.path);
    const destinationPath = path.join(storagePath, file.filename);
    
    const writeStream = fs.createWriteStream(destinationPath);
    fileStream.pipe(writeStream);
    
    writeStream.on('error', reject);
    writeStream.on('finish', () => resolve({ key: file.filename }));
  });
}

// Download file
const getStreamFile = (fileKey) => {
  const filePath = path.join(storagePath, fileKey);
  
  return fs.createReadStream(filePath).on('error', function (err) {
    console.log(err);
    return err;
  });
}

module.exports = { uploadFile, getStreamFile };
