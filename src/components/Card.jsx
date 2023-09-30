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
        // let amount = item.saleInfo.salebility && item.saleInfo.listPrice.amount;

        if (thumbnail !== undefined) {
          return (
            <div>
              <div
                className="card"
                onClick={() => {
                  {
                    setShow(true);
                    setBookItem(item);
                  }
                }}
              >
                <img src={thumbnail} alt="" />
                <div className="bottom">
                  <h3 className="title">{item.volumeInfo.title}</h3>
                  <p>Categories: {item.volumeInfo.categories}</p>
                  <p className="amount">&#8377; {item.saleInfo.saleability}</p>
                </div>
              </div>
              <Modal
                show={show}
                item={bookItem}
                onClose={() => {
                  setShow(false);
                }}
              />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Card;
