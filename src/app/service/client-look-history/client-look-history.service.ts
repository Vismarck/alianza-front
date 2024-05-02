import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientLookHistoryService {

  private searchHistory: string[] = [];

  constructor() { }

  addToSearchHistory(searchTerm: string): void {
    this.searchHistory.push(searchTerm);
  }

  getSearchHistory(): string[] {
    return this.searchHistory;
  }
}
