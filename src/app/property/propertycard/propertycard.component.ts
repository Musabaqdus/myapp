import { Component } from '@angular/core';

@Component({
  selector: 'app-propertycard',
  templateUrl: './propertycard.component.html',
  styleUrls: ['./propertycard.component.css'] 
})
export class PropertycardComponent {
  property: any = {
    "id": 1,
    "type": "House",
    "price": 5000000,
    "name": "5 marla house"
  };
}
