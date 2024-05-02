export class ClientModel {
    sharedKey: string;
    name: string;
    phone: string;
    email: string;
    startDate: Date;
    endDate: Date;
    dateAdded: Date;
  
    constructor(sharedKey: string, name: string, phone: string, email: string, startDate: Date, endDate: Date, dateAdded: Date) {
      this.sharedKey = sharedKey;
      this.name = name;
      this.phone = phone;
      this.email = email;
      this.startDate = startDate;
      this.endDate = endDate;
      this.dateAdded = dateAdded;
    }
  }