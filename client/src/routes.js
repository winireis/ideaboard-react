import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";
import SignUp from "./pages/signup";
import LogIn from "./pages/login";
import Ideas from "./pages/ideas";
import TopNavigation from "./pages/navigation";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <TopNavigation/>
    <div class="container">
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/ideas" component={Ideas} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
