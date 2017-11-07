import { Component, OnInit } from '@angular/core';
import { ServiceAService } from '../../module1/service-a.service';

@Component({
  selector: 'app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.css']
})
export class CompCComponent implements OnInit {

  serviceAData: string = '';
  
    constructor(private serviceA: ServiceAService) { }
  
    ngOnInit() {
      this.serviceAData = this.serviceA.getData();
    }
  
}
