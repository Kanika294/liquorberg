import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

declare var $:any;

@Component({
  selector: 'dashboard-cmp',
  moduleId: module.id,
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{
  ngOnInit(){
      var dataSales = {
        labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
        series: [
           [287, 385, 490, 562, 594, 626, 698, 895, 952],
          [67, 152, 193, 240, 387, 435, 535, 642, 744],
          [23, 113, 67, 108, 190, 239, 307, 410, 410]
        ]
      };


    }}
