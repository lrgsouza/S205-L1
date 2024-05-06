import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  materiasMatriculadas = [
    { 
    id: 'P108', 
    nome: 'Otimização 2', 
    faltas: 6,
    faltasMax: 20,
    n1: 'N/A',
    n2: 'N/A',
    nf: 'N/A' 
    },
    { 
    id: 'C214', 
    nome: 'Engenharia de Software',
    faltas: 6,
    faltasMax: 20,
    n1: 'N/A',
    n2: 'N/A',
    nf: 'N/A' },
    { 
    id: 'S107', 
    nome: 'DevOps',
    faltas: 6,
    faltasMax: 20,
    n1: 'N/A',
    n2: 'N/A',
    nf: 'N/A' 
    },
    { 
    id: 'S205', 
    nome: 'Interface Homem Maquina',
    faltas: 6,
    faltasMax: 20,
    n1: 'N/A',
    n2: 'N/A',
    nf: 'N/A' 
    },
    { 
      id: 'T106', 
      nome: 'Segurança de Rede',
      faltas: 6,
      faltasMax: 20,
      n1: 'N/A',
      n2: 'N/A',
      nf: 'N/A' },
  ];

  isModalOpen = false;
  detalhe: any;
  setOpen(isOpen: boolean, detalhe: any) {
    this.isModalOpen = isOpen;
    this.detalhe = detalhe;
  }
}
