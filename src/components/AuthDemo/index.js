import React from "react";
import { useAsync } from "react-use";
import {
  login,
  logout,
  getAuthUserTokens,
  getAuthUserProfile,
} from "@topcoder/mfe-header";

const Profile = ({ authUserProfile }) => (
  <div>
    {authUserProfile.loading ? (
      <div>Member Profile Loading...</div>
    ) : authUserProfile.error ? (
      <div>Profile Loading Error: {authUserProfile.error.message}</div>
    ) : (
      <div>
        <p>Welcomes {authUserProfile.value.firstName} {authUserProfile.value.lastName}</p>
        <p>Your handle is {authUserProfile.value.handle}</p>
      </div>
    )}
  </div>
);

const AuthDemo = () => {
  const authUserTokens = useAsync(getAuthUserTokens);
  const authUserProfile = useAsync(getAuthUserProfile);
  return (
    <div>
      {authUserTokens.loading ? (
        <div>Authentication...</div>
      ) : authUserTokens.error ? (
        <div>Authentication Error: {authUserTokens.error.message}</div>
      ) : (
        <div>
          {authUserTokens.value.tokenV3 ? (
            <div>
              Member is logged in, you can click on the button to logout : <button onClick={logout}>Logout</button>
              <Profile authUserProfile={authUserProfile} />
            </div>
          ) : (
            <div>
              Please log in, by click on the button : <button onClick={login}>Login</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AuthDemo;
