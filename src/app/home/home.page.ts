import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor() {}

  numero = 0;

  incremtnar(){
    
    // this.numero = this.numero + 1
    console.log(this.numero)
    this.numero += 1
    console.log("Deberia imrpimir", this.numero)
  }

  restar(){
    this.numero -= 1
  }
}
