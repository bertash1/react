import React, { useState } from "react";
import { setQuery } from "../../store/photoSlice";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { getSearchedPhoto } from "../../store/extraReducers";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "500px",
    margin: "0 auto",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
    color: "black",
  },
}));

export default function SearchBar() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const currentPage = useSelector((state) => state.photo.page);
  const query = useSelector((state) => state.photo.searchQuery);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(setQuery(inputValue));
    dispatch(getSearchedPhoto({ currentPage, query }));
    setInputValue("");
  };

  return (
    <Paper
      component="form"
      title="form"
      onSubmit={handleFormSubmit}
      className={classes.root}
    >
      <InputBase
        className={classes.input}
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type to search something"
        inputProps={{ "aria-label": "search images" }}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
