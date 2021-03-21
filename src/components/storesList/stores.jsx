import React from "react";
import styles from "./stores.module.css";
import Store from "./store/store";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const Stores = ({ storesList }) => {
  return (
    <React.Fragment>
      <div className={styles.stores}>
        {storesList.length > 0 ? (
          storesList.map(store => <Store key={store.id} productData={store} />)
        ) : (
          <span style={{ fontFamily: '"Josefin Sans", sans-serif' }}>
            There Are No Stores
          </span>
        )}
      </div>
    </React.Fragment>
  );
};

//which state/s this component will have access to
const mapStateToProps = state => {
  return {
    storesList: state.shop.storesList
  };
};

export default withRouter(connect(mapStateToProps)(Stores));
