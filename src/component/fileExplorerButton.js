import React, { useRef } from "react";

const FileExplorerButton = () => {
  const fileInputRef = useRef(null);

  const handleFileSelection = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log("Selected File:", selectedFile);
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <button onClick={handleFileSelection}>Upload File</button>
    </div>
  );
};

export default FileExplorerButton;