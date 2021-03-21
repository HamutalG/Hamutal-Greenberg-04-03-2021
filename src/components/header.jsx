import React, { Component } from "react";
import title from "./resources/css/images/title.png";

class header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={`header background`} id="header">
          <img className="title" src={title} alt="Shopping Organizer" />
        </div>
      </React.Fragment>
    );
  }
}

export default header;
