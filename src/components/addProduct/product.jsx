import React, { useState } from "react";
import styles from "./product.module.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  addToItemsList,
  addToStoresList
} from "../../redux/shopping/shopping-actions";
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  createMuiTheme,
  MuiThemeProvider,
  InputAdornment
} from "@material-ui/core";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const materialThemeProduct = createMuiTheme({
  overrides: {
    MuiFormControl: {
      root: {
        margin: "15px auto"
      }
    },
    MuiTypography: {
      h6: {
        fontFamily: '"Josefin Sans", sans-serif'
      }
    },
    MuiOutlinedInput: {
      root: {
        "&$focused $notchedOutline": {
          borderColor: "rgb(32, 158, 167)"
        },
        fontFamily: '"Josefin Sans", sans-serif',
        fontSize: "1.1rem"
      }
    },
    MuiFormLabel: {
      root: {
        fontFamily: '"Josefin Sans", sans-serif',
        fontSize: "1.1rem",
        "&$focused": {
          color: "rgb(32, 158, 167)"
        }
      }
    }
  }
});

const Product = ({ addToItemsList, addToStoresList }) => {
  const [open, setOpen] = useState(false);
  const [productName, setProductName] = useState("");
  const [onlineStore, setOnlineStore] = useState("");
  const [price, setPrice] = useState(0);
  const [ETA, setETA] = useState("");
  const [productQuantity, setProductQuantity] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setETA("");
    setPrice(0);
  };

  const handleSaveItem = () => {
    if (
      productName.trim() === "" ||
      onlineStore.trim() === "" ||
      price === 0 ||
      price === "" ||
      ETA === "" ||
      productQuantity === 0 ||
      productQuantity === ""
    ) {
      window.alert("Please Fill In All Fields");
    } else {
      addToItemsList(productName, onlineStore, price, ETA, productQuantity);

      addToStoresList(onlineStore);

      handleClose();
    }
  };

  return (
    <React.Fragment>
      <button onClick={handleClickOpen} className={styles.customButton}>
        Add Item
      </button>

      <Dialog open={open} onClose={handleClose}>
        <MuiThemeProvider theme={materialThemeProduct}>
          <DialogTitle className={styles.details__title}>
            Add New Item
          </DialogTitle>
          <DialogContent>
            <div className={styles.product}>
              <div className={styles.product__details}>
                <TextField
                  className={styles.product__details__each}
                  label="Product Name"
                  variant="outlined"
                  onChange={e => setProductName(e.target.value)}
                />
                <TextField
                  className={styles.product__details__each}
                  label="Online Store"
                  variant="outlined"
                  onChange={e => setOnlineStore(e.target.value)}
                />
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <TextField
                    className={styles.price__qnty__details}
                    label="Quantity"
                    type="number"
                    variant="outlined"
                    size="small"
                    onChange={e => setProductQuantity(Number(e.target.value))}
                    InputProps={{ inputProps: { min: 1 } }}
                  />

                  <TextField
                    className={styles.price__qnty__details}
                    label="Price"
                    variant="outlined"
                    size="small"
                    type="number"
                    value={price}
                    name="price"
                    onChange={e => setPrice(Number(e.target.value).toFixed(2))}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">$</InputAdornment>
                      ),
                      inputProps: { min: 0 }
                    }}
                  />
                </div>

                <div className={styles.details__date__outter}>
                  <div className={styles.details__date__title}>
                    Delivery EST Date:
                  </div>

                  <DatePicker
                    className={styles.datePicker}
                    selected={ETA}
                    onChange={e => setETA(e)}
                    dateFormat="dd/MM/yyyy"
                    popperPlacement="top-end"
                  />
                </div>
              </div>
            </div>
          </DialogContent>
          <DialogActions style={{ padding: "0px 20px 10px 0px" }}>
            <Button onClick={handleClose}>Close</Button>
            <Button onClick={handleSaveItem}>Save</Button>
          </DialogActions>{" "}
        </MuiThemeProvider>
      </Dialog>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addToItemsList: (productName, onlineStore, price, ETA, productQuantity) =>
      dispatch(
        addToItemsList(productName, onlineStore, price, ETA, productQuantity)
      ),
    addToStoresList: storeID => dispatch(addToStoresList(storeID))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Product));
