
import React from "react";
import { useAsync } from "react-use";
import {
  login,
  logout,
  getAuthUserTokens,
  getAuthUserProfile,
} from "@topcoder/mfe-header";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export const Swagger = ({ swaggerSpec }) => {
  const authUserTokens = useAsync(getAuthUserTokens);
  return <SwaggerUI spec={swaggerSpec} onComplete={(swaggerUi) => {
    if (authUserTokens.value.tokenV3) {
      swaggerUi.preauthorizeApiKey('bearer', 'Bearer ' + authUserTokens.value.tokenV3);
    }
  }} />
};

export default Swagger;
