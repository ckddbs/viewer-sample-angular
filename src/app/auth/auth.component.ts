import { Component, OnInit } from '@angular/core';
import { BrowserAuthorizationCallbackHandler, BrowserAuthorizationClientConfiguration } from '@itwin/browser-authorization';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-auth',
  template: '',
  styles: []
})
export class AuthComponent implements OnInit {

  private readonly _config: BrowserAuthorizationClientConfiguration;

  constructor() {
    this._config = environment.authorization;
  }

  ngOnInit(): void {
    BrowserAuthorizationCallbackHandler.handleSigninCallback(
      this._config.redirectUri
    );
  }

}
