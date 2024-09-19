import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllTask from "./component/all-task/AllTask";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const taskStatuses = [
  "all-tasks",
  "important",
  "completed",
  "inprogress",
  "not-started",
];

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            {taskStatuses.map((status) => (
              <Route key={status} path={status} element={<AllTask />} />
            ))}
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
