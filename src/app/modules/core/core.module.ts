import {NgModule, Optional, SkipSelf} from '@angular/core';


@NgModule({
  imports: [
  ],
  providers: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() existing: CoreModule) {
    if (existing) {
      throw new Error('Core Module has already been loaded. Import Core Module only in root module.');
    }
  }
}
