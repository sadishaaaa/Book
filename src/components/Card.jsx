import React from "react";
import image from "../images/img.jpg";

const Card = ({ book }) => {
  console.log(book);
  return (
    <div>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        if (thumbnail != undefined) {
          return (
            <div className="card">
              <img src={thumbnail} alt="" />
              <div className="bottom">
                <h3 className="title">React.js</h3>
                <p className="amount">&#8377; 3290</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Card;
