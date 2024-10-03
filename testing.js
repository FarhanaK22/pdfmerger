//############# JUST EXTRA TESTING CODE  #############################


// // // // const express = require('express');
// // // // const multer = require('multer');
// // // // const { merged_pdfs } = require('./merge');
// // // // const path = require('path');
// // // // const app = express();

// // // // const storage = multer.memoryStorage();
// // // // const upload = multer({ storage: storage });

// // // // app.use('/static', express.static('public'));
// // // // const port = 3000;

// // // // app.get('/', (req, res) => {
// // // //   res.sendFile(path.join(__dirname, "index.html"));
// // // // });

// // // // app.post('/merge', upload.array('pdfs', 2), async (req, res, next) => {
// // // //   try {
// // // //     console.log(req.files);
// // // //     // await merged_pdfs(req.files[0].buffer, req.files[1].buffer);
// // // //     // res.redirect("/static/merged.pdf");
// // // //     const mergedPdfBuffer = await merged_pdfs(req.files[0].buffer, req.files[1].buffer);
// // // //     res.setHeader('Content-Type', 'application/pdf');
// // // //     res.send(mergedPdfBuffer)
// // // //   } catch (error) {
// // // //     console.error('Error merging PDFs:', error);
// // // //     res.status(500).send('An error occurred while merging PDFs.');
// // // //   }
// // // // });

// // // // app.listen(port, () => {
// // // //   console.log(`Example app listening on port http://localhost:${port}`);
// // // // });



// // // // // const express = require('express')

// // // // // const multer  = require('multer')

// // // // // const { merged_pdfs} = require('./merge')
// // // // // const upload = multer({ dest: 'uploads/' })
// // // // // const path = require ('path')
// // // // // const { error } = require('console')
// // // // // const app = express()

// // // // // app.use('/static',express.static('public'))
// // // // // const port = 3000

// // // // // app.get('/', (req, res) => {
// // // // //   res.sendFile(path.join(__dirname,"index.html"))
// // // // // })

// // // // // app.post('/merge', upload.array('pdfs', 2), async (req, res, next) => {
// // // // //   try {
// // // // //     console.log(req.files);
// // // // //     await merged_pdfs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path));
// // // // //     res.redirect("/static/merged.pdf");
// // // // //   } catch (error) {
// // // // //     console.error('Error merging PDFs:', error);
// // // // //     res.status(500).send('An error occurred while merging PDFs.');
// // // // //   }
// // // // // });
// // // // // app.listen(port, () => {
// // // // //   console.log(`Example app listening on port http://localhost:${port}`)
// // // // // })

// // // const express = require('express');
// // // const multer = require('multer');
// // // const { merged_pdfs } = require('./merge');
// // // const path = require('path');
// // // const app = express();

// // // const storage = multer.memoryStorage();
// // // const upload = multer({ storage: storage });

// // // app.use('/static', express.static('public'));
// // // const port = 3000;

// // // app.get('/', (req, res) => {
// // //   res.sendFile(path.join(__dirname, "index.html"));
// // // });

// // // app.post('/merge', upload.array('pdfs', 2), async (req, res, next) => {
// // //   try {
// // //     console.log(req.files);
// // //     const mergedPdfBuffer = await merged_pdfs(req.files[0].buffer, req.files[1].buffer);
// // //     res.setHeader('Content-Type', 'application/pdf');
// // //     res.setHeader('Content-Disposition', 'inline; filename="merged.pdf"');
// // //     res.send(mergedPdfBuffer);
// // //   } catch (error) {
// // //     console.error('Error merging PDFs:', error);
// // //     res.status(500).send(`An error occurred while merging PDFs: ${error.message}`);
// // //   }
// // // });

// // // app.listen(port, () => {
// // //   console.log(`Example app listening on port http://localhost:${port}`);
// // // });
// // import express from 'express';
// // import multer from 'multer';
// // import path from 'path';
// // import { merged_pdfs } from './merge.mjs';

// // const app = express();

// // const storage = multer.memoryStorage();
// // const upload = multer({ storage: storage });

// // app.use('/static', express.static('public'));
// // const port = 3000;

// // app.get('/', (req, res) => {
// //   res.sendFile(path.join(__dirname, "index.html"));
// // });

// // app.post('/merge', upload.array('pdfs', 2), async (req, res, next) => {
// //   try {
// //     console.log(req.files);
// //     const mergedPdfBuffer = await merged_pdfs(req.files[0].buffer, req.files[1].buffer);
// //     res.setHeader('Content-Type', 'application/pdf');
// //     res.setHeader('Content-Disposition', 'inline; filename="merged.pdf"');
// //     res.send(mergedPdfBuffer);
// //   } catch (error) {
// //     console.error('Error merging PDFs:', error);
// //     res.status(500).send(`An error occurred while merging PDFs: ${error.message}`);
// //   }
// // });

// // app.listen(port, () => {
// //   console.log(`Example app listening on port http://localhost:${port}`);
// // });
// import express from 'express';
// import multer from 'multer';
// import path from 'path';
// import { merged_pdfs } from './merge.mjs';

// const app = express();

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// app.use('/static', express.static('public'));
// const port = 3000;

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

// app.post('/merge', upload.array('pdfs', 2), async (req, res, next) => {
//   try {
//     console.log(req.files);
//     const mergedPdfBuffer = await merged_pdfs(req.files[0].buffer, req.files[1].buffer);
//     res.setHeader('Content-Type', 'application/pdf');
//     res.setHeader('Content-Disposition', 'inline; filename="merged.pdf"');
//     res.send(mergedPdfBuffer);
//   } catch (error) {
//     console.error('Error merging PDFs:', error);
//     res.status(500).send(`An error occurred while merging PDFs: ${error.message}`);
//   }
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port http://localhost:${port}`);
// });



// const PDFMerger = async () => (await import('pdf-merger-js')).default;
// const path = require('path');

// // const merged_pdfs = async (buffer1, buffer2) => {
// //   try {
// //     // const merger = new (await PDFMerger())();
// //     const merger = new PDFMerger();
// //     await merger.add(buffer1);
// //     await merger.add(buffer2);

// //     // await merger.save(path.join(__dirname, 'public/merged.pdf')); // save under given name and reset the internal document
// //     const mergedPdfBuffer = await merger.saveAsBuffer(); // Save the merged PDF as a buffer
// //     console.log('PDFs merged successfully!');
// //     return mergedPdfBuffer;
// //   } catch (error) {
// //     console.error('Error merging PDFs:', error);
// //   }
// // };

// // module.exports = { merged_pdfs };


// // async function merged_pdfs(buffer1, buffer2) {
// //   const merger = new PDFMerger();
// //   await merger.add(buffer1);
// //   await merger.add(buffer2);
// //   const mergedPdfBuffer = await merger.saveAsBuffer(); // Save the merged PDF as a buffer
// //   return mergedPdfBuffer;
// // }

// // module.exports = { merged_pdfs };



// import PDFMerger from 'pdf-merger-js';

// async function merged_pdfs(buffer1, buffer2) {
//   const merger = new PDFMerger();
//   await merger.add(buffer1);
//   await merger.add(buffer2);
//   const mergedPdfBuffer = await merger.saveAsBuffer(); // Save the merged PDF as a buffer
//   return mergedPdfBuffer;
// }

// export { merged_pdfs };