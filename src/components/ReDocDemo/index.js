import React, { useLayoutEffect } from "react";
import { RedocStandalone } from 'redoc';
import {
  disableSidebarForRoute,
  enableSidebarForRoute,
} from "@topcoder/micro-frontends-navbar-app";
import "./styles.module.scss";

const COMPONENT_ROUTE = "/model/redoc/*";

const ReDocDemo = () => {

  useLayoutEffect(() => {
    disableSidebarForRoute(COMPONENT_ROUTE);
  }, []);

  return (
    <div>
      <div styleName="floating-sidebar">
        Sidebar :   
        <button onClick={() => enableSidebarForRoute(COMPONENT_ROUTE)}>
          Enable
        </button>
        <button onClick={() => disableSidebarForRoute(COMPONENT_ROUTE)}>
          Disable
        </button>
      </div>
      <RedocStandalone
        specUrl="https://petstore.swagger.io/v2/swagger.json"
      />
    </div>
  );
};

export default ReDocDemo;
