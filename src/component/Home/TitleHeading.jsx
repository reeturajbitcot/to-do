import React from "react";
import { useLocation } from "react-router-dom";
import { getRouteText } from "../../lib/helperFunction";

function TitleHeading() {
  let location = useLocation();

  return (
    <div className="d-flex justify-content-between">
      <h1>{getRouteText(location.pathname)}</h1>
    </div>
  );
}

export default TitleHeading;
