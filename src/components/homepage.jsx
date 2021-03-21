import React, { Component } from "react";
import { Link } from "react-router-dom";
import ItemsList from "./itemsList/items";
import StoresList from "./storesList/stores";
import { Tabs, Tab } from "react-bootstrap";
import ReceivedItem from "./resources/css/images/receivedItem.png";
import { Tooltip } from "@material-ui/core";
import AddProduct from "./addProduct/product";

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingPage: false
    };
  }

  componentWillMount() {
    this.setState({ loadingPage: true });
  }

  componentDidMount() {
    this.setState({ loadingPage: false });
  }

  render() {
    if (this.state.loadingPage) {
      return (
        <div style={{ margin: "0 auto", marginTop: 50 }}>
          <h4>Loading...</h4>

          <div className="loader"></div>
        </div>
      );
    }

    return (
      <React.Fragment>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              position: "relative"
            }}
          >
            <h2 className="pageTitle">Bought Items</h2>

            <span style={{ position: "absolute", right: 30, top: 30 }}>
              <AddProduct />
            </span>

            <span style={{ position: "absolute", left: 100, top: 30 }}>
              <Tooltip title="Received Items">
                <Link to="/receivedItems" className="roundButton">
                  <img
                    className="receivedItem"
                    src={ReceivedItem}
                    alt="Received Items"
                  />
                </Link>
              </Tooltip>
            </span>
          </div>

          <Tabs defaultActiveKey="ItemsList" className="nav-tabs">
            <Tab eventKey="ItemsList" title="Items List">
              <ItemsList />
            </Tab>

            <Tab eventKey="StoreList" title="Store List">
              <StoresList />
            </Tab>
          </Tabs>
        </div>
      </React.Fragment>
    );
  }
}

export default Homepage;
