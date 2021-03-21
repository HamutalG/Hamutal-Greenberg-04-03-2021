import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "../homepage";
import ReceivedItems from "../receivedItems/receivedItems";
import NotFound404 from "../notFound404";

export default class RouterBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <BrowserRouter basename="/Shopping_Organizer">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/receivedItems" component={ReceivedItems}></Route>
            <Route path="*" component={NotFound404} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
