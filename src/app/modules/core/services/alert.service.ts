import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';

@Injectable()
export class AlertService {
  constructor(private snackBar: MatSnackBar) {
  }

  success(message: string, duration = 3500) {
    this.snackBar.open(message, '', {
      duration,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['alert', 'alert-success']
    } as MatSnackBarConfig);
  }

  error(message: string, duration = 3500) {
    this.snackBar.open(message, '', {
      // duration,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['alert', 'alert-error']
    } as MatSnackBarConfig);
  }
}
