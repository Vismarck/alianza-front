import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmergencyPinHistoryService {

  private emergencyPin: string = '';
  private pinHistory: string[] = [];

  constructor() { }

  setEmergencyPin(pin: string): void {
    this.emergencyPin = pin;
    this.addToPinHistory(pin);
  }

  getEmergencyPin(): string {
    return this.emergencyPin;
  }

  private addToPinHistory(pin: string): void {
    this.pinHistory.push(pin);
  }

  getPinHistory(): string[] {
    return this.pinHistory;
  }
}
