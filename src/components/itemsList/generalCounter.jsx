import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styles from "./items.module.css";
import { connect } from "react-redux";
import { Tooltip } from "@material-ui/core";

const GeneralQuantityCounter = ({ itemsList }) => {
  const [itemsListCount, setItemsListCount] = useState(0);

  useEffect(() => {
    let count = 0;

    itemsList.forEach(item => {
      count += item.quantity;
    });

    setItemsListCount(count);
  }, [itemsList, itemsListCount]);

  return (
    <React.Fragment>
      <div className={styles.general__counter__inner}>
        <Tooltip title="Total Bought Items">
          <div className={styles.counter__button}>
            <span>{itemsListCount}</span>
          </div>
        </Tooltip>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    itemsList: state.shop.itemsList
  };
};

export default withRouter(connect(mapStateToProps)(GeneralQuantityCounter));
