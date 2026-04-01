import React, { useState, forwardRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import HTMLFlipBook from 'react-pageflip';
import { X, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Setup PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// Forward ref is required by react-pageflip for the child elements
const PageContent = forwardRef(({ pageNum, width }, ref) => {
  return (
    <div ref={ref} className="bg-[#111] shadow-inner flex flex-col justify-center items-center overflow-hidden flipbook-page-container">
      <Page 
        pageNumber={pageNum} 
        width={width}
        renderAnnotationLayer={false}
        renderTextLayer={false}
        className="pointer-events-none bg-[#111]"
      />
    </div>
  );
});

const FlipbookModal = ({ isOpen, onClose, pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  if (!isOpen) return null;

  // Determine aspect ratio dynamically based on PDF
  const isCompanyProfile = pdfUrl?.includes('Company_Profile');
  const baseWidth = isCompanyProfile ? 595 : 960;
  const baseHeight = isCompanyProfile ? 842 : 540;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-10"
      >
        <style dangerouslySetInnerHTML={{__html: `
          .flipbook-page-container .react-pdf__Page,
          .flipbook-page-container .react-pdf__Page__canvas {
            width: 100% !important;
            height: 100% !important;
            object-fit: contain;
          }
        `}} />
        
        {/* Header Actions */}
        <div className="absolute top-6 right-6 flex items-center gap-4 z-[80]">
          <button 
            onClick={() => setIsFullScreen(!isFullScreen)}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
          >
            {isFullScreen ? <Minimize2 size={24} /> : <Maximize2 size={24} />}
          </button>
          <button 
            onClick={onClose}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Flipbook Container */}
        <div className={`relative flex flex-col items-center justify-center transition-all duration-500 ${isFullScreen ? 'w-full h-full' : 'max-w-7xl w-full h-[95vh]'}`}>
          
          <div className="w-full h-full flex items-center justify-center overflow-hidden">
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={<div className="text-white text-xl font-serif">Opening Portfolio...</div>}
              className="flex justify-center flex-col items-center w-full h-full"
            >
              {numPages && (
                <HTMLFlipBook
                  width={baseWidth}
                  height={baseHeight}
                  size="stretch"
                  minWidth={315}
                  maxWidth={2000}
                  minHeight={250}
                  maxHeight={isCompanyProfile ? 1414 : 1125}
                  maxShadowOpacity={0.8}
                  showCover={true}
                  mobileScrollSupport={true}
                  className="shadow-2xl mx-auto"
                >
                  {[...Array(numPages).keys()].map((pNum) => (
                    <PageContent key={pNum} pageNum={pNum + 1} width={baseWidth} />
                  ))}
                </HTMLFlipBook>
              )}
            </Document>
          </div>

          {/* Footer Navigation Hints */}
          <div className="mt-6 flex items-center gap-6 text-white/50 text-sm uppercase tracking-widest font-bold">
            <div className="flex items-center gap-2">
              <ChevronLeft size={16} /> Drag or Click to turn
            </div>
            <div className="h-4 w-px bg-white/20" />
            <div className="flex items-center gap-2">
              {numPages} Pages <ChevronRight size={16} />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FlipbookModal;
