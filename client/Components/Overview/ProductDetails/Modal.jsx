import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 800,
    align: "center",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function SimpleModal({
  productData,
  showModal,
  img,
  size,
  amount,
  styleId
}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="inherit"
        size="large"
        className={classes.button}
        startIcon={<AddShoppingCartIcon />}
        onClick={handleOpen}
      >
        {" "}
        Add to Cart
      </Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Your Cart</h2>
          <p id="simple-modal-description">Dont forget to buy your clothes!</p>
          <div>Size: {size} </div>
          <div>Amount: {amount} </div>

          <SimpleModal />
          <div className="Xbutton">
            <Button
              type="button"
              variant="outlined"
              color="inherit"
              size="large"
              onClick={handleClose}
            >
              {" "}
              X
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
