import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  user: any = {
    name: 'Lucas Mirosvaldo de Oliveira',
    email: 'lmoliveira@ges.inatel.br',
    phone: '+551199998888',
    curso: 'GES',
    matricula: '123'
  }
  constructor() {
  }
  isAlertOpen = false;
  alertButtons = ['Ok'];

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

}
