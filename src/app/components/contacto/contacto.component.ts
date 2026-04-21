import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',

  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  telefono = '+57 313 228 8979';
  whatsappUrl = 'https://wa.me/+573132288979?text=Hola,%20estoy%20interesado%20en%20un%20vehículo';

  abrirWhatsApp(): void {
    window.open(this.whatsappUrl, '_blank');
  }

  verMapa(): void {
    window.open('https://www.google.com/maps/place/Autos+Miller%C2%B4s/@4.6546597,-74.078705,83m/data=!3m1!1e3!4m6!3m5!1s0x8e3f850c59d9bff7:0x8a3513bb1e6a8f96!8m2!3d4.6547252!4d-74.0785235!16s%2Fg%2F11t6yg2fwn?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D', '_blank');
  }
}