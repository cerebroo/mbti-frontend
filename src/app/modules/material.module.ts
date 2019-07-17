import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatRadioModule,
} from '@angular/material';

const modules = [
  MatButtonModule,
  MatRadioModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {
}
