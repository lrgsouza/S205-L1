import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit {
  selectedSegmentMind: string
  constructor() {
    this.selectedSegmentMind = 'networking';
  }

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
}
