import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => (
  <div>
    <p>Sorry!!! The page you are looking for cannot be found.</p>
    <Link to="/">Go to home page</Link>
  </div>
);

export default ErrorPage;
