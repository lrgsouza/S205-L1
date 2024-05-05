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
  

  segmentChangedMind(ev: any) {
    console.log('Segment changed', ev.target.value);
    this.selectedSegmentMind = ev.target.value;
  }
}
