import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App1 = React.lazy(() => import("app1/App"));
const Counter = React.lazy(() => import("app2/Counter"));

const App = () => (
  <div className="container">
    <div>Name: host</div>

    {/* <React.Suspense fallback="{'loading...'}">
      <App1/>
    </React.Suspense> */}

    {/* <React.Suspense fallback="{'loading...'}">
      <Counter/>
    </React.Suspense> */}
  </div>
);
ReactDOM.render(<App />, document.getElementById("host"));
