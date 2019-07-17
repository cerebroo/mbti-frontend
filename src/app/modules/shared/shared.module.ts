import {NgModule} from '@angular/core';
import {SizeBucketDirective} from './directives/size-bucket.directive';
import {RatingComponent} from './components/rating/rating.component';
import {ToArrayPipe} from './pipes/to-array.pipe';
import {MaterialModule} from '../material.module';
import {CommonModule} from '@angular/common';

const components = [
  RatingComponent,
];

const directives = [
  SizeBucketDirective,
];

const pipes = [
  ToArrayPipe,
];

@NgModule({
  declarations: [
    ...components,
    ...directives,
    ...pipes
  ],
  imports: [
    MaterialModule,
    CommonModule
  ],
  exports: [
    ...components,
    ...directives,
    ...pipes
  ]
})
export class SharedModule {
}
