import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from './pages/ContactUs'
import "./scss/App.scss";
import { Provider } from "./context/store";

const App = () => {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/contact-us' component={ContactUs}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
