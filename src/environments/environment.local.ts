/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
// REPLACE WITH YOUR CLIENT FROM https://developer.bentley.com/register/
export const environment = {
  production: false,
  authorization: {
    clientId: "spa-f0Hb4QF3pQMrmy7iCOs0YQWh1",
    scope: "imodelaccess:read imodels:read realitydata:read",
    redirectUri: "http://localhost:3000/auth",
    // postSignoutRedirectUri: "http://localhost:3000",
    responseType: "code",
    authority: "https://ims.bentley.com"
  },
  iTwinId: "7465e5c1-5c6a-4b7c-ac29-fc226f4bd66b",
  iModelId: "0f5e1e73-60c0-43b3-90a6-cc4e4cde7e03",
  map: {
    bingKey: ""
  }
};