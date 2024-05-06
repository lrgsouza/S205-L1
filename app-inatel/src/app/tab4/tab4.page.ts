import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit {
  selectedSegmentMind: string
  minDate: string;
  constructor() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1); // Adiciona um dia à data atual

    this.selectedSegmentMind = 'networking';
    this.minDate = tomorrow.toISOString();
  }
  consulta = {
    id: '',
    nome: '',
    data: '',
    horario: ''
  }

  consultas = [
    {
      id: '1',
      nome: 'Lidia Ferraz',
      data: '2024-06-01',
      horario: '15:00'
    },
    {
      id: '2',
      nome: 'Debora Ferreira',
      data: '2024-07-01',
      horario: '15:00'
    },
    {
      id: '3',
      nome: 'Fernanda Oliveira',
      data: '2024-08-01',
      horario: '15:00'
    }
  ]

  ngOnInit() {}
  
  isModalOpen = false;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();
    return utcDay !== 0 && utcDay !== 6;
  };
  segmentChangedMind(ev: any) {
    console.log('Segment changed', ev.target.value);
    this.selectedSegmentMind = ev.target.value;
  }
  //função para adicionar uma nova consulta
  rawDate: string = new Date().toISOString();
  rawPsicologo = '';
  addConsulta() {
    //definindo consulta
    //id
    this.consulta.id = (this.consultas.length+1).toString();
    this.consulta.nome = this.rawPsicologo;
    this.consulta.data = this.rawDate.split('T')[0];
    this.consulta.horario = this.rawDate.split('T')[1].split(':')[0] + ':' + this.rawDate.split('T')[1].split(':')[1];
    console.log(this.consulta.data);
  
    this.consultas.push(this.consulta);
    this.consulta = {
      id: '',
      nome: '',
      data: '',
      horario: ''
    };
    this.setOpen(false);
  }
  //função para deletar uma consulta pelo nome
  deleteConsulta(consultaID: string) {
    this.consultas = this.consultas.filter(consulta => consulta.id !== consultaID);
  }
}
