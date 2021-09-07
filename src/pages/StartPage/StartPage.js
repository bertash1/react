import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhoto } from "../../store/extraReducers";

import ImageItems from "../../components/ImageItems/ImageItems";
import PaginationBar from "../../components/PaginationBar/PaginationBar";

const StartPage = () => {
  const IMG_PER_PAGE = 20;

  const dispatch = useDispatch();
  const photo = useSelector((state) => state.photo.photo.hits);
  const hits = useSelector((state) =>
    Math.floor(state.photo.photo.totalHits / IMG_PER_PAGE)
  );
  const currentPage = useSelector((state) => state.photo.page);

  useEffect(() => {
    dispatch(getPhoto(currentPage));
  }, [dispatch, currentPage]);

  return (
    <div className="content">
      {photo ? (
        <>
          <ImageItems photos={photo} />
          <PaginationBar currentPage={currentPage} pages={hits} />
        </>
      ) : null}
    </div>
  );
};

export default StartPage;
