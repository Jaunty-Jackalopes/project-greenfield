import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import checkMark from "../logos/check.svg";
import "./productDetails.css";

const useStyles = makeStyles({
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
    cursor: "pointer"
  }
});

const StyleSelectorItem = ({
  styleId,
  index,
  imageThumbnail,
  handleStyleChange,
  checkMarker
}) => {
  const classes = useStyles();
  return (
    <div className="avatar-holder">
      {checkMarker === false && index === 0 ? (
        <img src={checkMark} alt="CheckMark" className="check" />
      ) : checkMarker === true && index === styleId ? (
        <img src={checkMark} alt="CheckMark" className="check" />
      ) : null}
      <Avatar
        alt={index.toString()}
        src={imageThumbnail}
        className={classes.bigAvatar}
        onClick={handleStyleChange}
      />
    </div>
  );
};

export default StyleSelectorItem;
