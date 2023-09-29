import React from "react";

const Modal = () => {
  return (
    <div>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close">
            <span class="material-symbols-outlined">close</span>
          </button>
          <div className="inner-box">
            <img src="../images/img1.jpg" alt="" />
            <div className="info">
              <h1></h1>
              <h3></h3>
              <h4>
                <span></span>
              </h4>
              <a>
                <button>More</button>
              </a>
            </div>
          </div>
          <h4 className="description"></h4>
        </div>
      </div>
    </div>
  );
};

export default Modal;
