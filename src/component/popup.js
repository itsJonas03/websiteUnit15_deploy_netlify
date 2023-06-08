import React, { useState } from "react";
import FileExplorerButton from "./fileExplorerButton";
import "../css/popup.css";

const Popup = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Apply
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Application for Hot Beans Web</h2>

            <div className="form-field">
              <p>Name:</p>
              <input type="text" style={{ marginRight: "10px" }}/>
              <p>Email:</p>
              <input type="text" />
            </div>

            <div className="form-field">
              <p>Age:</p>
              <input type="text"  style={{ marginRight: "20px" }}/>
              <p>State:</p>
              <input type="text" />
            </div>

            <div className="form-field">
              <p>Gender:</p>
              <input type="text"  style={{ marginRight: "10px" }}/>
              <p>Postcode:</p>
              <input type="text" />
            </div>

            <div className="form-field">
              <p>Ethnicity:</p>
              <input type="text"  style={{ marginRight: "10px" }}/>
            </div>

            <FileExplorerButton/>

            <div className="form-field">
              <h1>Tell us About Yourself</h1>
            </div>
            <input type="text" className="inputBox"/>
            
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
