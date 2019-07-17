import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatRadioModule, MatSnackBarModule,
} from '@angular/material';

const modules = [
  MatButtonModule,
  MatRadioModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule {
}
