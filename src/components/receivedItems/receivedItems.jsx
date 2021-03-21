import React from "react";
import styles from "./receivedItems.module.css";
import RItem from "./receivedItem/rItem";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

const ReceivedItems = ({ receivedItemsList }) => {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          position: "relative"
        }}
      >
        <h2 className="pageTitle">Received Items</h2>

        <span style={{ position: "absolute", left: 30, top: 30 }}>
          <Link to="/">
            <button className={styles.backButton}>Back</button>
          </Link>
        </span>
      </div>

      <div className={styles.products}>
        {receivedItemsList.length > 0 ? (
          receivedItemsList.map(prod => (
            <RItem key={prod.id} productData={prod} />
          ))
        ) : (
          <span style={{ fontFamily: '"Josefin Sans", sans-serif' }}>
            There Are No Received Items
          </span>
        )}
      </div>
    </React.Fragment>
  );
};

//which state/s this component will have access to
const mapStateToProps = state => {
  return {
    receivedItemsList: state.shop.receivedItemsList
  };
};

export default withRouter(connect(mapStateToProps)(ReceivedItems));
