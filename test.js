const express = require('express');
const { uploadFile, getStreamFile } = require('./s3');

const app = express();
const port = 3000;

// Upload route
app.post('/upload', uploadFile, (req, res) => {
  res.send('File uploaded successfully!');
});

// Download route
app.get('/download/:filename', getStreamFile);

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
