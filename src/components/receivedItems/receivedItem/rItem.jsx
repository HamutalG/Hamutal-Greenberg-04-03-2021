import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import styles from "./rItem.module.css";
import { connect } from "react-redux";
import { Tooltip } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeFromReceivedItemsList } from "../../../redux/shopping/shopping-actions";
import moment from "moment";

const ReceivedItem = ({ productData, removeFromReceivedItemsList }) => {
  const [deleteItem, setDeleteItem] = useState(false);

  const clickDeleteFade = () => {
    setDeleteItem(true);

    setTimeout(() => {
      removeFromReceivedItemsList(productData.id);
      setDeleteItem(false);
    }, 2000);
  };

  return (
    <div
      className={
        deleteItem ? `${styles.item} ${styles.deleteItem}` : styles.item
      }
    >
      <div className={styles.item__details}>
        <div className={styles.item__details__inner}>
          <div className={styles.details__title}>{productData.name}</div>
          <div className={styles.details__inner}>
            <b>Store: </b>
            {productData.store}
          </div>
          <div className={styles.details__inner}>
            <b>Price: </b>$ {productData.price}
          </div>
          <div className={styles.details__inner}>
            <b> Delivery EST Date </b>
            {moment(productData.deliveryDate).format("DD/MM/YYYY")}
          </div>
        </div>

        <div className={styles.item__buttons}>
          <div className={styles.item__buttons__inner}>
            <Tooltip title="Delete Item">
              <DeleteIcon
                onClick={() => clickDeleteFade()}
                style={{
                  color: "rgb(160, 0, 0)",
                  fontSize: 30,
                  cursor: "pointer"
                }}
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromReceivedItemsList: id => dispatch(removeFromReceivedItemsList(id))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(ReceivedItem));
