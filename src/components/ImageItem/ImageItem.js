import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faHeart } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const ImageItem = ({ webformatURL, tags, likes, downloads }) => {
  return (
    <div className="img-item">
      <img className="img-item__img" src={webformatURL} alt={tags}></img>
      <div className="img-item__info">
        <div className="img-item__downloads-wrapper">
          <FontAwesomeIcon className="img-item__download" icon={faDownload} />
          <span className="img-item__downloads">{downloads}</span>
        </div>
        <div className="img-item__likes-wrapper">
          <FontAwesomeIcon className="img-item__heart" icon={faHeart} />
          <span className="img-item__likes">{likes}</span>
        </div>
      </div>
    </div>
  );
};

export default ImageItem;
