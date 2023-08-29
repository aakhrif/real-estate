import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  private messageSubject = new BehaviorSubject<string>("");
  public message$ = this.messageSubject.asObservable();

  private snackbarColorSubject = new BehaviorSubject<string>("");
  public snackbarColor$ = this.snackbarColorSubject.asObservable();

  constructor() { }

  showMessage(message: string, color: string) {
    this.snackbarColorSubject.next(color);
    this.messageSubject.next(message);
  }

  showError(message: string) {
    this.snackbarColorSubject.next('red');
    this.messageSubject.next(`Error: ${message}`);
  }

  showSuccess(message: string) {
    this.snackbarColorSubject.next('green');
    this.messageSubject.next(`Success: ${message}`);
  }

  showStatusMessage(statusCode: number, message: string) {
    this.messageSubject.next(`Status ${statusCode}: ${message}`);
  }
}
