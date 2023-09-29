import React, { useState } from "react";
import image from "../images/img.jpg";
import Modal from "./Modal";

const Card = ({ book }) => {
  console.log(book);
  const [show, setShow] = useState(false);
  const [bookItem, setBookItem] = useState();
  return (
    <div>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        // let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

        if (thumbnail !== undefined) {
          return (
            <div>
              <div className="card">
                <img src={thumbnail} alt="" />
                <div className="bottom">
                  <h3 className="title">{item.volumeInfo.title}</h3>
                  <p className="amount">&#8377; </p>
                </div>
              </div>
              <Modal />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Card;
