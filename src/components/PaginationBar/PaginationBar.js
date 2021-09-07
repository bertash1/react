import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { setPage } from "../../store/photoSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      display: "flex",
      justifyContent: "center",
    },
  },
}));

const PaginationBar = ({ pages, currentPage }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    if (
      e.target instanceof HTMLButtonElement &&
      currentPage.toString() !== e.target.innerText
    ) {
      dispatch(setPage(e.target.innerText));
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className={classes.root}>
      <Pagination
        onClick={handleClick}
        count={pages}
        page={+currentPage}
        hideNextButton={true}
        hidePrevButton={true}
      />
    </div>
  );
};
export default PaginationBar;
