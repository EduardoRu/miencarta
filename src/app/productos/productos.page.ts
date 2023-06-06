import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProductosPage implements OnInit {

  constructor() { }

  producto = {codigo: "", nombre: "", precio: ""};

  productos = [
    {"codigo":"1", "nombre": "Coca", "precio":"20.00"},
    {"codigo":"2", "nombre":"Sabritas", "precio":"20.00"},
    {"codigo":"3", "nombre":"Cachuates", "precio":"20.00"},
    {"codigo":"4", "nombre":"Enchiladas", "precio":"20.00"},
    {"codigo":"5", "nombre":"Azucar", "precio":"20.00"},
    {"codigo":"6", "nombre":"Sal", "precio":"20.00"},
    {"codigo":"7", "nombre":"Pepsi", "precio":"20.00"},
    {"codigo":"8", "nombre":"Chetos", "precio":"20.00"},
    {"codigo":"9", "nombre":"Donas", "precio":"20.00"},
    {"codigo":"10", "nombre":"Carbon", "precio":"20.00"}
  ];

  

  ngOnInit() {
  }

  getDatos(){
    this.productos.push({
      codigo: this.producto.codigo,
      nombre: this.producto.nombre,
      precio: this.producto.precio
    })
  }

}
