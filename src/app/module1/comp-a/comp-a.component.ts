import { Component, OnInit } from '@angular/core';
import { ServiceAService } from '../service-a.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnInit {

  serviceAData: string = '';

  constructor(private serviceA: ServiceAService) { }

  ngOnInit() {
    this.serviceAData = this.serviceA.getData();
  }

}
