import * as actionTypes from "./shopping-types";

export const addToItemsList = (
  itemName,
  onlineStore,
  itemPrice,
  itemETA,
  productQuantity
) => {
  return {
    type: actionTypes.ADD_TO_ITEMS_LIST,
    payload: {
      name: itemName,
      store: onlineStore,
      price: itemPrice,
      deliveryDate: itemETA,
      quantity: productQuantity
    }
  };
};

export const addToStoresList = storeID => {
  return {
    type: actionTypes.ADD_TO_STORES_LIST,
    payload: {
      storeID: storeID
    }
  };
};

export const addToReceivedItemsList = itemID => {
  return {
    type: actionTypes.ADD_TO_RECEIVED_ITEMS_LIST,
    payload: {
      id: itemID
    }
  };
};

export const removeFromItemsList = itemID => {
  return {
    type: actionTypes.REMOVE_FROM_ITEMS_LIST,
    payload: {
      id: itemID
    }
  };
};

export const removeFromStoresList = storeID => {
  return {
    type: actionTypes.REMOVE_FROM_STORES_LIST,
    payload: {
      storeID: storeID
    }
  };
};

export const removeFromReceivedItemsList = itemID => {
  return {
    type: actionTypes.REMOVE_FROM_RECEIVED_ITEMS_LIST,
    payload: {
      id: itemID
    }
  };
};
