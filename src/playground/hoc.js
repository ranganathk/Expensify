import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>This info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <h3>Be careful with this data</h3>}
      <WrappedComponent {...props}/>
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? <WrappedComponent {...props} /> : <h3>Kindly login to see the data</h3>}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const RequireAuth = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="Important info!"/>, document.getElementById('app'));
ReactDOM.render(<RequireAuth isAuthenticated={false} info="Important info!" />, document.getElementById('app'));