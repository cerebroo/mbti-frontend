import { NgModule } from '@angular/core';
import {
  MatButtonModule,
} from '@angular/material';

const modules = [
  MatButtonModule,
  // add more modules here as needed
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {
}
