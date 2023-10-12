import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ErrorBoundary from "./ErrorBoundary";


const App1 = React.lazy(() => import("app1/App"));
const Counter = React.lazy(() => import("app2/Counter"));

const App = () => (
  <div className="container">
    <div>Name: host</div>

    <ErrorBoundary>
      <React.Suspense fallback="{'Загрузка App1...'}">
        <App1/>
      </React.Suspense>
    </ErrorBoundary>

    <ErrorBoundary >
      <React.Suspense fallback="{'Загрузка App2...'}">
        <Counter/>
      </React.Suspense>
    </ErrorBoundary>
  </div>
);

ReactDOM.render(<App />, document.getElementById("host"));
