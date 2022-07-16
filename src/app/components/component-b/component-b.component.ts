import { Component, OnInit } from '@angular/core';
import { PassDataService } from 'src/app/shared/pass-data.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss']
})
export class ComponentBComponent implements OnInit {

  dateReceivedFromAComponent: number = 0;

  constructor(private dataService: PassDataService) { }

  ngOnInit(): void {
  }

  getDataStoredInService(): void {
    this.dataService.storeDataFromAComponentForBComponent.subscribe(value => {
      this.dateReceivedFromAComponent = value;
      console.log("COMPOSANT B : notofié à l'INT du subscribe", this.dateReceivedFromAComponent)
    });
  }

}
