import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
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

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={DashboardPage} exact={true}></Route>
      <Route path="/create" component={AddExpensePage}></Route>
      <Route path="/edit" component={EditExpensePage}></Route>
      <Route path="/help" component={HelpPage}></Route>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
