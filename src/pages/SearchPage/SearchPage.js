import SearchBar from "../../components/SearchBar/SearchBar";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ImageItems from "../../components/ImageItems/ImageItems";
import PaginationBar from "../../components/PaginationBar/PaginationBar";
import { getSearchedPhoto } from "../../store/extraReducers";

const FirstPage = () => {
  const IMG_PER_PAGE = 20;
  const dispatch = useDispatch();

  const searchedPhoto = useSelector((state) => state.photo.searchedPhoto.hits);
  const hits = useSelector((state) =>
    Math.floor(state.photo.searchedPhoto.totalHits / IMG_PER_PAGE)
  );
  const currentPage = useSelector((state) => state.photo.page);
  const query = useSelector((state) => state.photo.searchQuery);

  useEffect(() => {
    if (query) {
      dispatch(getSearchedPhoto({ currentPage, query }));
    }
  }, [dispatch, currentPage, query]);

  return (
    <div className="content">
      <SearchBar />;
      {searchedPhoto ? (
        <>
          <ImageItems photos={searchedPhoto} />
          <PaginationBar currentPage={currentPage} pages={hits} />
        </>
      ) : null}
    </div>
  );
};

export default FirstPage;
