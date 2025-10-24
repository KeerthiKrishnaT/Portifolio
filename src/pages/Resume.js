import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { BiDownload } from "react-icons/bi";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex items-center justify-center flex-col relative">
      <img
        src="./star.jpg"
        alt=""
        className="h-full w-full object-cover opacity-10 absolute bottom-0"
      />
      <a
        href={"Keerthi Resume.pdf"}
        target="_blank"
        rel="noreferrer"
        className="flex items-center z-20 justify-center gap-3 px-6 py-2 rounded  shadow-md text-white bg-purple-600 hover:bg-purple-700 transition duration-300 ease-in-out my-3"
      >
        <BiDownload fontSize={20} /> Download CV
      </a>
      <div className="py-12 flex justify-center items-center overflow-hidden z-20">
        <Document file="Keerthi Resume.pdf" className="flex flex-col justify-center shadow-xl">
          <Page pageNumber={1} scale={Math.min(width / 768, 1.5)} className="mb-4" />
          <Page pageNumber={2} scale={Math.min(width / 768, 1.5)} />
        </Document>
      </div>
    </div>
  );
}

export default Resume;
