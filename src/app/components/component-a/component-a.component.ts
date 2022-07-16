import { Component, OnInit } from '@angular/core';
import { PassDataService } from 'src/app/shared/pass-data.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent implements OnInit {

  dataToSendFromAcomponentToBComponent: number = 42;

  constructor(private dataService: PassDataService) { }

  ngOnInit(): void {
  }
  
  sendDataToService(): void {
    console.log("COMPOSANT A : envoi de la donnée", this.dataToSendFromAcomponentToBComponent)
    this.dataService.storeDataFromAComponentForBComponent.next(this.dataToSendFromAcomponentToBComponent);
  }

}
