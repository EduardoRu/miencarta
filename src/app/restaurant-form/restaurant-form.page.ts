import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.page.html',
  styleUrls: ['./restaurant-form.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RestaurantFormPage implements OnInit {
  name:string = "";
  description:string ="";

  constructor(public http:HttpClient, public route:Router, private toastController:ToastController) { }
  url = "http://localhost:1337/api/restaurants"

  ngOnInit() {
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', msg:string, icon:string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: position,
      icon: icon
    });

  await toast.present();
  }

  guardarRestaruante(name:string, desc:string){

    if(name.length > 0 && desc.length > 0){
      this.http.post(this.url, {"data":{"name":name, "description":desc}}).subscribe(response=>{
        console.log(response+"🌮🌮");
        this.route.navigate(["/restaurant"])
      }, error=>{
        this.presentToast('bottom', "Ha ocurrido un error con el envio de datos", 'wifi');
      })
    }else{
      this.presentToast('bottom', "Favor de completar los campos", "alert-circle");
    }
  }
}
