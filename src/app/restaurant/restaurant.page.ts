import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
  standalone: true,
  imports: [RouterModule,IonicModule, CommonModule, FormsModule]
})
export class RestaurantPage implements OnInit {

  constructor( public http:HttpClient) { }
  url = "http://192.168.1.66:1337/api/restaurants"
  res:any;

  ngOnInit() {
    this.http.get(this.url).subscribe(response => {
      this.res = response;
      this.res = this.res['data']
    })
  }

  removerRestaruante(id:string){
    this.http.delete(this.url+"/"+id).subscribe(response =>{
      console.log(response)
    })
  }

}
