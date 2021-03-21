import React from "react";
import { withRouter } from "react-router-dom";
import styles from "./item.module.css";
import { connect } from "react-redux";
import {
  addToReceivedItemsList,
  removeFromItemsList,
  addToStoresList,
  removeFromStoresList
} from "../../../redux/shopping/shopping-actions";
import { Tooltip } from "@material-ui/core";
import ReceivedItem from "../../resources/css/images/receivedItem.png";
import moment from "moment";

const IndividualItem = ({
  productData,
  addToReceivedItemsList,
  removeFromItemsList,
  addToStoresList,
  removeFromStoresList,
  conversionILS,
  currency
}) => {
  return (
    <div className={styles.item}>
      <div className={styles.item__details}>
        <div className={styles.item__details__inner}>
          <div className={styles.details__title}>{productData.name}</div>
          <div className={styles.details__inner}>
            <b>Store: </b>
            {productData.store}
          </div>
          <div className={styles.details__inner}>
            <b>Price: </b>
            {currency === "USD"
              ? `$ ${productData.price}`
              : `₪ ${Number(conversionILS * productData.price).toFixed(2)}`}
          </div>
          <div className={styles.details__inner}>
            <b> Delivery EST Date </b>
            {moment(productData.deliveryDate).format("DD/MM/YYYY")}
          </div>
        </div>

        <div className={styles.item__buttons}>
          <div className={styles.item__buttons__inner}>
            <Tooltip title="Item Received">
              <img
                onClick={() => {
                  addToReceivedItemsList(productData.id);
                  removeFromItemsList(productData.id);
                  addToStoresList(productData.store);
                  removeFromStoresList(productData.store);
                }}
                style={{ width: 30, cursor: "pointer" }}
                src={ReceivedItem}
                alt="Item Received"
              />
            </Tooltip>

            <Tooltip title="Amount">
              <div className={styles.quantity__item}>
                {productData.quantity}
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addToReceivedItemsList: id => dispatch(addToReceivedItemsList(id)),
    removeFromItemsList: id => dispatch(removeFromItemsList(id)),
    addToStoresList: storeID => dispatch(addToStoresList(storeID)),
    removeFromStoresList: storeID => dispatch(removeFromStoresList(storeID))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(IndividualItem));
