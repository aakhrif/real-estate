import { Component } from '@angular/core';
import { GREEN_COLOR, RED_COLOR, SNACKBAR_APPEAR_TIME } from 'src/app/constants';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent {
  message: string = "";
  snackbarColor: string = "";

  constructor(private snackbarService: SnackbarService) {
    this.snackbarService.message$.subscribe((message) => {
      this.message = message;
      setTimeout(() => {
        this.message = "";
      }, SNACKBAR_APPEAR_TIME)
    });

    this.snackbarService.snackbarColor$.subscribe((snackbarColor) => {
      if (snackbarColor === RED_COLOR) {
        this.snackbarColor = "bg-red-500";
      } else if (snackbarColor === GREEN_COLOR) {
        this.snackbarColor = "bg-green-500";
      }
    });
  }
}
