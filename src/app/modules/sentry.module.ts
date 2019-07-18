import {APP_INITIALIZER, ErrorHandler, NgModule} from '@angular/core';
import * as Raven from 'raven-js';
import {environment} from '../../environments/environment';

export class RavenErrorHandler implements ErrorHandler {
  handleError(err: any) {
    if (environment.production && environment.sentryUrl) {
      Raven.captureException(err);
    } else {
      console.error(err);
    }
  }
}

export const setupSentry = () => {
  if (environment.production ) {
    if (environment.sentryUrl) {
      Raven.config(environment.sentryUrl).install();
      console.log('Setup Sentry done');
    } else {
      console.error('Can\'t setup Sentry as sentryUrl is not set in environment');
    }
  }
  return () => {
  };
};

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    {
      provide: ErrorHandler,
      useClass: RavenErrorHandler
    },
    {
      provide: APP_INITIALIZER,
      useFactory: setupSentry,
      multi: true
    }
  ]
})
export class SentryModule {
}
