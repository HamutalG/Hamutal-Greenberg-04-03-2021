import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import ScrollUpButton from "react-scroll-up-button";
import { BrowserRouter as Router } from "react-router-dom";
import RoutingBlock from "./components/routes/routingBlock";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingPage: false
    };
  }

  componentWillMount() {
    if (navigator.appVersion.toString().indexOf(".NET") > 0) {
      alert(
        "For Optimal Use, Open This Site Using 𝗚𝗼𝗼𝗴𝗹𝗲 𝗖𝗵𝗿𝗼𝗺𝗲 𝗕𝗿𝗼𝘄𝘀𝗲𝗿 \n\n לשימוש אופטימלי, פתח אתר זה באמצעות דפדפן \n 𝗚𝗼𝗼𝗴𝗹𝗲 𝗖𝗵𝗿𝗼𝗺𝗲"
      );
    }

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
        <div id="container">
          <div id="mainBody">
            <div id="header">
              <Header />
            </div>

            <div id="main">
              <Router>
                <RoutingBlock />
              </Router>
            </div>

            <ScrollUpButton />
            <div id="footer">
              <Footer />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
