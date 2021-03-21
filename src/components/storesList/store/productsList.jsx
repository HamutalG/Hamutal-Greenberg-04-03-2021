import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Tooltip,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core";
import cssStyles from "./store.module.css";
import { BsCardChecklist } from "react-icons/bs";

//works with "withStyles" - material UI
const DialogWidth = withStyles(theme => ({
  root: {
    width: 250
  }
}))(DialogContent);

const materialThemeProductsList = createMuiTheme({
  overrides: {
    MuiDialog: {
      paperWidthSm: {
        maxWidth: "unset"
      }
    },
    MuiTypography: {
      h6: {
        fontFamily: '"Josefin Sans", sans-serif'
      }
    },
    MuiDialogContent: {
      root: {
        fontFamily: '"Josefin Sans", sans-serif'
      }
    }
  }
});

const ItemPreview = (productsList, classes) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Tooltip title="View Product List">
        <button
          onClick={handleClickOpen}
          className={`${cssStyles.buttons__btn} ${cssStyles.buttons__view}`}
        >
          <BsCardChecklist
            style={{ fontSize: 30, color: "rgb(32, 158, 167)" }}
          />
        </button>
      </Tooltip>

      <Dialog open={open} onClose={handleClose}>
        <MuiThemeProvider theme={materialThemeProductsList}>
          <DialogTitle
            className={cssStyles.modalTitle}
            style={{ textAlign: "center" }}
          >
            {productsList.storeName}
          </DialogTitle>

          <DialogWidth>
            <ul style={{ listStyleType: "circle" }}>
              {productsList.productsNames.map((product, i) => {
                return <li key={i}>{product}</li>;
              })}
            </ul>
          </DialogWidth>
          <DialogActions style={{ padding: "0px 20px 10px 0px" }}>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </MuiThemeProvider>
      </Dialog>
    </React.Fragment>
  );
};

export default ItemPreview;
