import { Component, OnInit } from '@angular/core';

type Aula = {
  id: string;
  isLab: boolean;
  labId: string;
  titulo: string;
  hora: string;
  local: string;
  faltas: number;
  faltasMax: number;
  n1: string;
  n2: string;
  nf: string;
};

type DiaDaSemana = {
  dia: string;
  data: string;
  aulas: Aula[];
};

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  selectedSegment: string
  
  getWeekDates(){
    const today = new Date();
    const firstDayOfWeek = today.getDate() - today.getDay() + 1; // Ajuste para que a semana comece na segunda-feira
    const weekDates = [];
  
    for (let i = 0; i < 5; i++) {
      const date = new Date(today.setDate(firstDayOfWeek + i));
      weekDates.push(date.toLocaleDateString('pt-BR'));
    }
  
    return weekDates;
  };

  weekDates = this.getWeekDates();


  nextWeekly: any[] = [
    {
      dia: 'Terça feira',
      data: this.weekDates[1],
      aulas: [
        {
          id: 'P108',
          isLab: true,
          labId: '1',
          titulo: 'Otimização 2',
          hora: '19:30',
          local: 'Prédio 1 - Sala 10',
          faltas: 4,
          faltasMax: 10,
          n1: '100',
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
          n1: '77',
          n2: 'N/A',
          nf: 'N/A'
        }
      ]
    },
    {
      dia: 'Quarta feira',
      data: this.weekDates[2],
      aulas: [
        {
          id: 'S107',
          isLab: true,
          labId: '1',
          titulo: 'DevOps',
          hora: '19:30',
          local: 'Prédio 1 - Sala 16',
          faltas: 0,
          faltasMax: 20,
          n1: '96',
          n2: 'N/A',
          nf: 'N/A'
        },
        {
          id: 'S205',
          isLab: false,
          labId: '',
          titulo: 'Interface Homem Maquina',
          hora: '21:30',
          local: 'Prédio 6 - Sala 1.2',
          faltas: 6,
          faltasMax: 10,
          n1: '90',
          n2: 'N/A',
          nf: 'N/A'
        }
      ]
    },
    {
      dia: 'Quinta feira',
      data: this.weekDates[3],
      aulas: [
        {
          id: 'T106',
          isLab: true,
          labId: '1',
          titulo: 'Segurança de Redes',
          hora: '21:30',
          local: 'Prédio 2 - Sala 2',
          faltas: 8,
          faltasMax: 20,
          n1: '73',
          n2: 'N/A',
          nf: 'N/A'
        }
      ]
    },
    {
      dia: 'Sexta feira',
      data: this.weekDates[4],
      aulas: [
        {
          id: 'C214',
          isLab: false,
          labId: '',
          titulo: 'Engenharia de Software',
          hora: '19:30',
          local: 'Prédio 1 - Sala 15',
          faltas: 8,
          faltasMax: 20,
          n1: '77',
          n2: 'N/A',
          nf: 'N/A'
        },{
          id: 'S205',
          isLab: true,
          labId: '1',
          titulo: 'Interface Homem Maquina',
          hora: '21:30',
          local: 'Prédio 6 - Sala 1.2',
          faltas: 6,
          faltasMax: 10,
          n1: '90',
          n2: 'N/A',
          nf: 'N/A'
        }

      ]
    }
  ]

  getTodayClasses = (weeklySchedule: DiaDaSemana[]): Aula[] => {
    const today = new Date().toLocaleDateString('pt-BR');
    const todaySchedule = weeklySchedule.find(schedule => schedule.data === today);
    return todaySchedule ? todaySchedule.aulas : [];
  };
  
  nextDaily = this.getTodayClasses(this.nextWeekly);
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
