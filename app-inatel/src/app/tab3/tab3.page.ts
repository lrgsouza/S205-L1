import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  selectedSegment: string
  nextDaily: any[] = [
    { 
      id: 'C216',
      isLab: false,
      labId: '',
      titulo: 'Sistemas distribuídos',
      hora: '19:00',
      local: 'Prédio 1 - Sala 10',
      faltas: 0,
      faltasMax: 10,
      n1: 'N/A',
      n2: 'N/A',
      nf: 'N/A'
    },
    { 
      id: 'S205',
      isLab: true,
      labId: '1',
      titulo: 'Interface Homem Maquina',
      hora: '21:30',
      local: 'Prédio 6 - Lab 1.2',
      faltas: 4,
      faltasMax: 10,
      n1: 'N/A',
      n2: 'N/A',
      nf: 'N/A'
    },
    
  ]

  nextWeekly: any[] = [
    {
      dia: 'Segunda feira',
      data: '06/05/2024',
      aulas: this.nextDaily
    },
    {
      dia: 'Terça feira',
      data: '07/05/2024',
      aulas: [
        {
          id: 'P108',
          isLab: true,
          labId: '2',
          titulo: 'Otimização 2',
          hora: '19:00',
          local: 'Prédio 1 - Sala 10',
          faltas: 4,
          faltasMax: 10,
          n1: 'N/A',
          n2: 'N/A',
          nf: 'N/A'
        },
        {
          id: 'C214',
          isLab: false,
          labId: '',
          titulo: 'Engenharia de Software',
          hora: '21:30',
          local: 'Prédio 1 - Sala 16',
          faltas: 6,
          faltasMax: 20,
          n1: 'N/A',
          n2: 'N/A',
          nf: 'N/A'
        }
      ]
    }
  ]
  constructor() {
    this.selectedSegment = 'hoje';
  }

  ngOnInit() {}

  segmentChanged(ev: any) {
    console.log('Segment changed', ev.target.value);
    this.selectedSegment = ev.target.value;
  }
  isModalOpen = false;
  detalhe: any;
  setOpen(isOpen: boolean, detalhe: any) {
    this.isModalOpen = isOpen;
    this.detalhe = detalhe;
  }
}
