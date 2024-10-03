
import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { merged_pdfs } from './merge.mjs';

const app = express();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// app.use('/static', express.static('public'));

const port = 3000;

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post('/merge', upload.array('pdfs', 2), async (req, res, next) => {
  try {
    console.log(req.files);
    const mergedPdfBuffer = await merged_pdfs(req.files[0].buffer, req.files[1].buffer);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename="merged.pdf"');
    res.send(mergedPdfBuffer);
  } catch (error) {
    console.error('Error merging PDFs:', error);
    res.status(500).send(`An error occurred while merging PDFs: ${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
