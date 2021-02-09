/**
 * This component demonstrates how we can disable sidebar for some subroutes.
 *
 * For example this component disables sidebar for routes "/model/no-sidebar/*".
 */
import React, { useState, useLayoutEffect } from "react";
import {
  disableSidebarForRoute,
  enableSidebarForRoute,
} from "@topcoder/micro-frontends-navbar-app";

const COMPONENT_ROUTE = "/model/micro-frontends/no-sidebar-demo/*";

const NoSidebarDemo = () => {
  // use "useLayoutEffect" to remove the sidebar as early as possible
  // without waiting the component to be rendered
  useLayoutEffect(() => {
    enableSidebarForRoute(COMPONENT_ROUTE);
  }, []);

  const [toggle, setToggle] = useState(false);
  
  async function handleToggle() {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  }

  return (
    <>
      <div>Enable / Disable sidebar for routes that match:</div>
      <pre>{COMPONENT_ROUTE}</pre>
      <div>
        SideBar : 
        <button onClick={() => { handleToggle(); enableSidebarForRoute(COMPONENT_ROUTE);  }} disabled={!toggle}>Enable</button>
        <button onClick={() => { handleToggle(); disableSidebarForRoute(COMPONENT_ROUTE);  }} disabled={toggle}>Disable</button>
      </div>
    </>
  );
};

export default NoSidebarDemo;
