import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class LoginPage implements OnInit {

  constructor(public http:HttpClient, public route:Router, private toastController:ToastController) { }

  ngOnInit() {
  }

  url = "http://localhost:1337/api/auth/local";
  email:string = "";
  pass:string = "";

  async presentToast(position: 'top' | 'middle' | 'bottom', msg:string, icon:string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: position,
      icon: icon
    });

  await toast.present();
  }

  iniciarsesion(email:string, pass:string){
    if(email.length > 0 && pass.length > 0){
      this.http.post(this.url, {"identifier": email, "password": pass}).subscribe(res => {
        console.log(res)
      }, error =>{
        this.presentToast('middle', "Ha ocurrido un error con el envio de datos", 'wifi');
      })
    }else{
      this.presentToast('middle', "Favor de completar los campos", "alert-circle");
    }
  }

}
