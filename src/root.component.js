import React, { useEffect } from "react";
import { Link, Router } from "@reach/router";
import { setAppMenu } from "@topcoder/micro-frontends-navbar-app";
import appMenu from "./constants/appMenu";
import Home from "./components/Home";
// import AuthDemo from "./components/AuthDemo";
// import NoSidebarDemo from "./components/NoSidebarDemo";
import Documents from "./components/Documents";
import "./styles/main.module.scss";

export default function Root() {
  useEffect(() => {
    // when app starts it should set its side menu structure
    setAppMenu("/model", appMenu);
  }, []);

  return (
    <div styleName="micro-frontends-model-app">
      <Router>
        <Home path="/model" />
        <Documents path="/model/:folderId/:documentId" />
      </Router>
    </div>
  );
}
