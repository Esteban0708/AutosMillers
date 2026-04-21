import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
   anio = new Date().getFullYear();
  whatsappUrl = 'https://wa.me/573132288979?text=Hola,%20estoy%20interesado%20en%20un%20vehículo';

  abrirWhatsApp(): void {
    window.open(this.whatsappUrl, '_blank');
  }
}
