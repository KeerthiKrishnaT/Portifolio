import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { BiDownload } from "react-icons/bi";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  };

  const onDocumentLoadError = (error) => {
    setError("Failed to load PDF. Please try again.");
    setLoading(false);
    console.error("PDF load error:", error);
  };

  return (
    <div className="flex items-center justify-center flex-col relative">
      <img
        src="./star.jpg"
        alt=""
        className="h-full w-full object-cover opacity-10 absolute bottom-0"
      />
      <a
        href={"/Keerthi Resume.pdf"}
        download="Keerthi_Krishna_T_Resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="flex items-center z-20 justify-center gap-3 px-6 py-2 rounded  shadow-md text-white bg-purple-600 hover:bg-purple-700 transition duration-300 ease-in-out my-3"
      >
        <BiDownload fontSize={20} /> Download CV
      </a>
      
      <div className="py-12 flex justify-center items-center overflow-hidden z-20">
        {loading && (
          <div className="text-white text-lg">Loading resume...</div>
        )}
        
        {error && (
          <div className="text-red-400 text-lg text-center max-w-md">
            {error}
            <br />
            <a 
              href="/Keerthi Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline mt-2 inline-block"
            >
              Click here to view resume directly
            </a>
          </div>
        )}
        
        <Document 
          file="/Keerthi Resume.pdf" 
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          className="flex flex-col justify-center shadow-xl"
        >
          {numPages && (
            <>
              <Page pageNumber={1} scale={Math.min(width / 768, 1.5)} className="mb-4" />
              {numPages > 1 && (
                <Page pageNumber={2} scale={Math.min(width / 768, 1.5)} />
              )}
            </>
          )}
        </Document>
      </div>
    </div>
  );
}

export default Resume;
