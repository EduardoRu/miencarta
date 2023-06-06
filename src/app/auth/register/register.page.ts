import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [RouterModule, IonicModule, CommonModule, FormsModule]
})
export class RegisterPage implements OnInit {

  constructor(public http:HttpClient, public route:Router, private toastController:ToastController) { }

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

  url = "http://localhost:1337/api/auth/local/register"
  username:string = "";
  userEmail:string = "";
  password:string = "";

  registrarUsuario(username:string, userEmail:string, password:string){
    if(username.length > 0 && userEmail.length > 0 && password.length > 0){
      this.http.post(this.url,{"username":username, "email":userEmail, "password":password}).subscribe(res => {
        this.route.navigate(["/login"])
      },error =>{
        this.presentToast('top', "Favor de verificar su usuario y contraseña", "wifi");
      })
    }else{
      this.presentToast('top', "Favor de ingresar más datos", "alert-circle")
    }
  }

}
