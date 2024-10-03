
const PDFMerger = async () => (await import('pdf-merger-js')).default;
const path = require('path');

const merged_pdfs = async (buffer1, buffer2) => {
  try {
    // const merger = new (await PDFMerger())();
    const merger = new PDFMerger();
    await merger.add(buffer1);
    await merger.add(buffer2);

    await merger.save(path.join(__dirname, 'public/merged.pdf')); // save under given name and reset the internal document

    console.log('PDFs merged successfully!');
  } catch (error) {
    console.error('Error merging PDFs:', error);
  }
};

module.exports = { merged_pdfs };




