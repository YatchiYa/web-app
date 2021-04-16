import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Landing from "./component/landing-page/landing-main-page"
import Landing2 from "./component/landing-page-2/landing-main-page"
import MainHome from "./component/home/main_home"
import Auth from "./component/auth/auth"
import Presentation from "./component/presentation/presentation"
import NewPre from "./component/presentation/pre-build"


class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={MainHome} />
        <Route path="/home" exact component={Landing} />
        <Route path="/home-v2" exact component={Landing2} />
        <Route path="/authentification" exact component={Auth} />
        <Route path="/presentation" exact component={Presentation} />
        <Route path="/new-presentation" exact component={NewPre} />
      </Router>
    );
  }
}

export default App;