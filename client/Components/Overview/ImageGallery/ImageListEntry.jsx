import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import "./ImageGallery.css";

const useStyles = makeStyles({
  imageList: {
    margin: 5,
    width: 60,
    height: 60,
    borderRadius: 10,
    cursor: "pointer",
    boxShadow: "0px 0px 3px 4px white",
    opacity: 0.9
  }
});

const ImageListEntry = ({ imageThumbnail, handleClick, index }) => {
  const classes = useStyles();

  return (
    <div>
      <Avatar
        alt={index.toString()}
        src={imageThumbnail}
        className={classes.imageList}
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageListEntry;
