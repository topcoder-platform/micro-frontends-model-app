import React from "react";
import { RedocStandalone } from 'redoc';

const ReDocDemo = () => {

  return (
    <div>
      <meta http-equiv="Content-Security-Policy" content="worker-src 'self' blob:"></meta>
      <RedocStandalone
        specUrl="https://petstore.swagger.io/v2/swagger.json"
      />
    </div>
  );
};

export default ReDocDemo;
