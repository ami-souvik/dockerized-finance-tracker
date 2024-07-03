'use client';
import { useState } from 'react';
import { cn } from '../utils/tailwind';

const DragNdrop = ({ width = 'fit', onSubmit = () => {} }) => {
  const [file, setFile] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      setFile(event.target.files[0]);
    }
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles.length > 0) {
      setFile(event.target.files[0]);
    }
  };
  return (
    <div className="relative p-4 w-full max-w-2xl max-h-full">
      <div className="relative rounded-lg shadow">
        <section className={cn(`border-dotted border-2 border-sky-500 rounded p-2`, `w-${width}`)}>
          <div className="m-2" onDrop={handleDrop} onDragOver={(event) => event.preventDefault()}>
            <div className="flex flex-col space-y-2 items-start">
              <div>
                <p className="font-bold">Drag and drop your files here</p>
                <p>Supported file(s): .CSV</p>
              </div>
              <label htmlFor="browse" className="bg-black text-white px-4 py-1 rounded">
                Browse files
              </label>
              <input
                type="file"
                hidden
                id="browse"
                onChange={handleFileChange}
                accept=".pdf,.docx,.pptx,.txt,.xlsx"
                multiple
              ></input>
            </div>
            <div>
              <div>
                <p>{file.name}</p>
              </div>
            </div>
          </div>
        </section>
        <div className="flex items-center">
          <button className="border p-2 m-2 rounded" onClick={() => onSubmit(file)}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default DragNdrop;
