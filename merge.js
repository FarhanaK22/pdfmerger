
const PDFMerger = async () => (await import('pdf-merger-js')).default;
const path = require('path');

const merged_pdfs = async (p1, p2) => {

  try {
    const merger = new (await PDFMerger())();

    await merger.add(p1);

    await merger.add(p2);

    await merger.save(path.join(__dirname, 'public/merged.pdf')); // save under given name and reset the internal document

    console.log('PDFs merged successfully!');
  } catch (error) {
    console.error('Error merging PDFs:', error);
  }
};

module.exports = { merged_pdfs };




