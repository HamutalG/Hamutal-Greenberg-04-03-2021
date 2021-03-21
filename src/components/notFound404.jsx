import React, { Component } from "react";

export class NotFound404 extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          textAlign: "center",
          margin: "30px 0px"
        }}
      >
        <div style={{ fontWeight: "bolder" }}>404: Page Not Found</div>
      </div>
    );
  }
}

export default NotFound404;
