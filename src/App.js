import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import "./scss/App.scss";
import { Provider } from "./context/store";
import Blog from "./pages/Blog";
import Media from "./pages/Media";
import Career from "./pages/Career";
import Research from "./pages/Research";
import "overlayscrollbars/css/OverlayScrollbars.css";
import "./scss/base/_myTheme.css";
import CareerCareer from "./pages/CareerCareer";

const App = () => {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/media" component={Media} />
          <Route exact path="/career" component={Career} />
          <Route exact path="/career/:careerPath" component={CareerCareer} />
          <Route exact path="/research" component={Research} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
