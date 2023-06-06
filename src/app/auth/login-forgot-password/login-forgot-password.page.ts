import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-forgot-password',
  templateUrl: './login-forgot-password.page.html',
  styleUrls: ['./login-forgot-password.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginForgotPasswordPage implements OnInit {

  constructor(public http:HttpClient, public route:Router, private toastController:ToastController) { }

  url = "http://localhost:1337/api/auth/local/forgot-password"

  ngOnInit() {
  }

}
