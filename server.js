const express = require('express')

const multer  = require('multer')

const { merged_pdfs} = require('./merge')
const upload = multer({ dest: 'uploads/' })
const path = require ('path')
const { error } = require('console')
const app = express()

app.use('/static',express.static('public'))
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"templates/index.html"))
})

app.post('/merge', upload.array('pdfs', 2), async (req, res, next) => {
  try {
    console.log(req.files);
    await merged_pdfs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path));
    res.redirect("http://localhost:3000/static/merged.pdf");
  } catch (error) {
    console.error('Error merging PDFs:', error);
    res.status(500).send('An error occurred while merging PDFs.');
  }
});
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

