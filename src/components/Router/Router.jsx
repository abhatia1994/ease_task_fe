import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { RegisterVendor } from "../vendor/RegisterVendor";
import { RegisterCustomer } from "../customer/RegisterCustomer";
import { SignIn } from "../Auth/SignIn";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export function BasicExample() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/vendor-register">
        <RegisterVendor />
      </Route>
      <Route path="/customer-register">
        <RegisterCustomer />
      </Route>
      <Route path="/sign-in">
        <SignIn />
      </Route>
    </Switch>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
