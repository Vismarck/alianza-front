// emergency-pin-history.component.ts
import { Component, OnInit } from '@angular/core';
import { EmergencyPinHistoryService } from '../../service/emergency-pin-history/emergency-pin-history.service';

@Component({
  selector: 'app-emergency-pin-history',
  templateUrl: './emergency-pin-history.component.html',
  styleUrls: ['./emergency-pin-history.component.css']
})
export class EmergencyPinHistoryComponent implements OnInit {
  pinHistory: string[] = [];

  constructor(private pinService: EmergencyPinHistoryService) { }

  ngOnInit(): void {
    this.pinHistory = this.pinService.getPinHistory();
  }
}