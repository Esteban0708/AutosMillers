import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Servicio {
  titulo: string;
  desc: string;
  svg: SafeHtml;
}

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  servicios: Servicio[];

  constructor(private sanitizer: DomSanitizer) {
    const raw = [
      {
        titulo: 'Compra 100% segura',
        desc: 'Todos nuestros vehículos pasan por una revisión técnica exhaustiva antes de publicarse en el catálogo.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <polyline points="9 12 11 14 15 10"/>
              </svg>`
      },
      {
        titulo: 'Trámites incluidos',
        desc: 'Nos encargamos de todo el papeleo: traspaso, impuestos y documentación sin costo adicional.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="9" y1="13" x2="15" y2="13"/>
                <line x1="9" y1="17" x2="13" y2="17"/>
              </svg>`
      },
      {
        titulo: 'Asesoría personalizada',
        desc: 'Nuestros asesores te guían en todo el proceso para que tomes la mejor decisión de compra.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
              </svg>`
      },
      {
        titulo: 'Peritaje de tu vehículo',
        desc: '¿Quieres vender o permutar? Valoramos tu vehículo actual de forma gratuita y sin compromisos.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="17 1 21 5 17 9"/>
                <path d="M3 11V9a4 4 0 014-4h14"/>
                <polyline points="7 23 3 19 7 15"/>
                <path d="M21 13v2a4 4 0 01-4 4H3"/>
              </svg>`
      },
      {
        titulo: 'Precios transparentes',
        desc: 'Sin letras pequeñas ni costos ocultos. El precio que ves es el precio que pagas.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"/>
                <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
              </svg>`
      },
      {
        titulo: 'Múltiples formas de pago',
        desc: 'Paga en efectivo, transferencia o permuta. Nos adaptamos a tu situación.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="3"/>
                <line x1="2" y1="10" x2="22" y2="10"/>
                <line x1="6" y1="15" x2="10" y2="15"/>
              </svg>`
      }
    ];

    this.servicios = raw.map(s => ({
      ...s,
      svg: this.sanitizer.bypassSecurityTrustHtml(s.svg)
    }));
  }
}