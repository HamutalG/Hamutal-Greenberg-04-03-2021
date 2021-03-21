import React from "react";
import styles from "./store.module.css";
import ProductsList from "./productsList";

const IndividualStore = ({ productData }) => {
  return (
    <div className={styles.store}>
      <div className={styles.store__details}>
        <div className={styles.details__text}>{productData.store}</div>

        <div className={styles.total_products}>
          Total Products: {productData.totalProducts}
        </div>

        <ProductsList
          productsNames={productData.productsList}
          storeName={productData.store}
        />
      </div>
    </div>
  );
};

export default IndividualStore;
