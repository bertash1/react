import React from "react";
import ImageItem from "../ImageItem/ImageItem";
import "./index.css";

const ImageItems = ({ photos }) => {
  return (
    <div className="photos-wrapper">
      {photos !== undefined
        ? photos.map((item) => {
            const { id, webformatURL, tags, likes, downloads } = item;
            return (
              <ImageItem
                key={id}
                webformatURL={webformatURL}
                tags={tags}
                likes={likes}
                downloads={downloads}
              />
            );
          })
        : null}
    </div>
  );
};

export default ImageItems;
