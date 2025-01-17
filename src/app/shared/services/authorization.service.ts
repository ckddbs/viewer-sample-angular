/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
import { environment } from 'src/environments/environment';

import { Injectable } from '@angular/core';
import {
  BrowserAuthorizationCallbackHandler, BrowserAuthorizationClient,
  BrowserAuthorizationClientConfiguration
} from '@itwin/browser-authorization';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private readonly _client: BrowserAuthorizationClient;
  private readonly _config: BrowserAuthorizationClientConfiguration;

  constructor() {
    this._config = environment.authorization;
    this._client = new BrowserAuthorizationClient(this._config);
  }

  public async signIn() {
    await BrowserAuthorizationCallbackHandler.handleSigninCallback(
      this._config.redirectUri
    );
    return new Promise<boolean>((resolve, reject) => {
      this._client.onAccessTokenChanged.addOnce((token: string) => {
        console.log('signin-hasSignedIn', this._client.hasSignedIn);
        console.log('signin-hasExpired', this._client.hasExpired);
        console.log('signin-token', token.length, token);
        resolve(token !== "");
      });
      // this._client.signIn()
      this._client.signInPopup()
        .catch((err) => {
          console.error('signin-error', err);
          reject(err);
        });
    });
  }

  public get client() {
    return this._client;
  }

  public get signedIn() {
    return this._client.hasSignedIn;
  }

  signOut(): Promise<void> {
    return this._client.signOut();
  }

}
