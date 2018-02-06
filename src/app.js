import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const DashboardPage = () => (
  <div>
    Hi I am in dashboard page.
  </div>
);

const AddExpensePage = () => (
  <div>
    Hi I am in add expense page.
  </div>
);

const EditExpensePage = () => (
  <div>
    Hi I am in edit expense page.
  </div>
);

const HelpPage = () => (
  <div>
    Hi I am in help page.
  </div>
);

const ErrorPage = () => (
  <div>
    <p>Sorry!!! The page you are looking for cannot be found.</p>
  </div>
);

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={DashboardPage} exact={true}></Route>
      <Route path="/create" component={AddExpensePage}></Route>
      <Route path="/edit" component={EditExpensePage}></Route>
      <Route path="/help" component={HelpPage}></Route>
      <Route component={ErrorPage}></Route>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
