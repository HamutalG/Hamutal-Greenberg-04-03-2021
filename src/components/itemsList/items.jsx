import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import CSSstyles from "./items.module.css";
import Product from "./item/item";
import { connect } from "react-redux";
import { compose } from "redux";
import GeneralQuantityCounter from "./generalCounter";
import {
  TextField,
  MenuItem,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core";
import axios from "axios";

//works with "withStyles" - material UI
const styles = theme => ({
  cssLabel: {
    fontFamily: '"Josefin Sans", sans-serif',
    "&$cssFocused": {
      color: "rgb(32, 158, 167)"
    }
  },
  cssFocused: {},
  cssOutlinedInput: {
    fontFamily: '"Josefin Sans", sans-serif',
    "&$cssFocused $notchedOutline": {
      borderColor: "rgb(32, 158, 167)"
    }
  },
  notchedOutline: {},
  cssSelectField: {
    width: 110,
    fontFamily: '"Josefin Sans", sans-serif'
  }
});

const materialThemeItems = createMuiTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        "&$focused $notchedOutline": {
          borderColor: "rgb(32, 158, 167)"
        }
      }
    },
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: "rgb(32, 158, 167)"
        }
      }
    },
    MuiMenuItem: {
      root: {
        fontFamily: '"Josefin Sans", sans-serif'
      }
    },
    MuiInputLabel: {
      outlined: {
        fontFamily: '"Josefin Sans", sans-serif',
        fontSize: "1.1rem"
      }
    }
  }
});

const Products = ({ itemsList, classes }) => {
  const [currency, setCurrency] = useState("USD");
  const [convertedCurrency, setConvertedCurrency] = useState(0);

  //sort items by deliveryDate
  const sortedItemsList = itemsList.sort(
    (a, b) => a.deliveryDate - b.deliveryDate
  );

  const handleCurrencyChange = () => {
    let currencyILS = convertedCurrency;

    let getCurrencyPromise = () => {
      return new Promise((resolve, reject) => {
        axios
          .get("https://api.exchangeratesapi.io/latest?base=USD&symbols=ILS")
          .then(res => {
            currencyILS = res.data.rates.ILS;

            resolve(currencyILS);
          })
          .catch(err => {
            //console.log(err);

            alert(
              "Oops! Something went wrong with retreiving the currency exchange rates, please reload the page soon."
            );

            reject();
          });
      });
    };

    getCurrencyPromise().then(currencyILS => {
      setConvertedCurrency(currencyILS);
    });

    return convertedCurrency;
  };

  const tenMinutes = 600000;

  useEffect(() => {
    handleCurrencyChange();

    const interval = setInterval(() => {
      handleCurrencyChange();
    }, tenMinutes);

    return () => clearInterval(interval); // unmount to prevent memory leaks
  }, []);

  return (
    <React.Fragment>
      <div className={CSSstyles.general__counter__outter}>
        <GeneralQuantityCounter />

        <MuiThemeProvider theme={materialThemeItems}>
          <TextField
            select
            label="Currency"
            variant="outlined"
            size="small"
            defaultValue="USD"
            onChange={e => setCurrency(e.target.value)}
            InputProps={{
              classes: {
                root: classes.cssSelectField
              }
            }}
          >
            <MenuItem key="USD" value="USD">
              USD
            </MenuItem>
            <MenuItem key="NIS" value="NIS">
              NIS
            </MenuItem>
          </TextField>
        </MuiThemeProvider>
      </div>

      <div className={CSSstyles.items}>
        {sortedItemsList.length > 0 ? (
          sortedItemsList.map(prod => (
            <Product
              key={prod.id}
              productData={prod}
              currency={currency}
              conversionILS={convertedCurrency}
            />
          ))
        ) : (
          <span style={{ fontFamily: '"Josefin Sans", sans-serif' }}>
            There Are No Items (yet 😏)
          </span>
        )}
      </div>
    </React.Fragment>
  );
};

//which state/s this component will have access to
const mapStateToProps = state => {
  return {
    itemsList: state.shop.itemsList
  };
};

export default compose(connect(mapStateToProps), withStyles(styles))(Products);
