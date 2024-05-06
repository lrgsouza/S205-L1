import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  user: any = {
    name: 'Lucas Ribeiro Garcia de Souza',
    email: 'lrgsouza@ges.inatel.br',
    phone: '+5519993447675'
  }
  constructor() {
  }
  isAlertOpen = false;
  alertButtons = ['Ok'];

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

}
