// client-look-history.component.ts
import { Component, OnInit } from '@angular/core';
import { ClientLookHistoryService } from '../../service/client-look-history/client-look-history.service';

@Component({
  selector: 'app-client-look-history',
  templateUrl: './client-look-history.component.html',
  styleUrls: ['./client-look-history.component.css']
})
export class ClientLookHistoryComponent implements OnInit {
  searchHistory: string[] = [];

  constructor(private clientService: ClientLookHistoryService) { }

  ngOnInit(): void {
    this.searchHistory = this.clientService.getSearchHistory();
  }
}