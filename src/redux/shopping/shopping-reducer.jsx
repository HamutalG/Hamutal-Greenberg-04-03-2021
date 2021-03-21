import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  itemsList: [] /* {id, name, store, price, deliveryDate, quantity} */,
  storesList: [] /* {store, totalProducts, productsList} */,
  receivedItemsList: []
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_ITEMS_LIST:
      const addID = state.itemsList.length + 1;

      return {
        ...state,
        itemsList: [
          ...state.itemsList,
          {
            id: addID,
            name: action.payload.name,
            store: action.payload.store,
            price: action.payload.price,
            deliveryDate: action.payload.deliveryDate,
            quantity: action.payload.quantity
          }
        ]
      };

    case actionTypes.ADD_TO_STORES_LIST:
      let totalQuantity = 0;
      const productNames = [];

      const items = state.itemsList.filter(
        prod => prod.store === action.payload.storeID
      );

      //sum up all the products from the store
      items.forEach(element => {
        totalQuantity += element.quantity;

        productNames.push(element.name);
      });

      //check if already in storesList
      const inStoresList = state.storesList.find(store =>
        store.store === action.payload.storeID ? true : false
      );

      return {
        ...state,
        storesList: inStoresList
          ? state.storesList.map(store =>
              store.store === action.payload.storeID
                ? {
                    ...store,
                    totalProducts: totalQuantity,
                    productsList: productNames
                  }
                : store
            )
          : [
              ...state.storesList,
              {
                store: action.payload.storeID,
                totalProducts: totalQuantity,
                productsList: productNames
              }
            ]
      };

    case actionTypes.ADD_TO_RECEIVED_ITEMS_LIST:
      //get item info
      const receivedItem = state.itemsList.find(
        prod => prod.id === action.payload.id
      );

      return {
        ...state,
        receivedItemsList: [...state.receivedItemsList, receivedItem]
      };

    case actionTypes.REMOVE_FROM_ITEMS_LIST:
      return {
        ...state,
        itemsList: state.itemsList.filter(item => item.id !== action.payload.id)
      };

    case actionTypes.REMOVE_FROM_STORES_LIST:
      return {
        ...state,
        storesList: state.storesList.filter(store => store.totalProducts > 0)
      };

    case actionTypes.REMOVE_FROM_RECEIVED_ITEMS_LIST:
      return {
        ...state,
        receivedItemsList: state.receivedItemsList.filter(
          item => item.id !== action.payload.id
        )
      };

    default:
      return state;
  }
};

export default shopReducer;
