
import PDFMerger from 'pdf-merger-js';

async function merged_pdfs(buffer1, buffer2) {
  const merger = new PDFMerger();
  await merger.add(buffer1);
  await merger.add(buffer2);
  const mergedPdfBuffer = await merger.saveAsBuffer(); // Save the merged PDF as a buffer
  return mergedPdfBuffer;
}

export { merged_pdfs };
