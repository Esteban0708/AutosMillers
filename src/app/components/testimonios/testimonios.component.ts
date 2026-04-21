import { Component } from '@angular/core';

interface Testimonio {
  nombre: string;
  iniciales: string;
  vehiculo: string;
  texto: string;
  estrellas: number;
}

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.css']
})
export class TestimoniosComponent {
  testimonios: Testimonio[] = [
    { nombre:'Carlos Martínez', iniciales:'CM', vehiculo:'Compró Toyota Corolla 2022', texto:'Excelente servicio, el proceso fue muy rápido y transparente. El vehículo llegó en perfectas condiciones.', estrellas:5 },
    { nombre:'Luis Herrera', iniciales:'LH', vehiculo:'Compró Honda CB 190R 2023', texto:'Compré mi moto aquí y quedé muy satisfecho. Los trámites los hicieron ellos y en menos de una semana ya estaba rodando.', estrellas:5 },
    { nombre:'Jhon Duarte', iniciales:'JD', vehiculo:'Compró Renault Sandero 2020', texto:'Muy buena atención desde el primer contacto. El precio fue justo y el vehículo estaba exactamente como lo describían.', estrellas:5 },    { nombre:'Ricardo Peña', iniciales:'RP', vehiculo:'Compró Mazda CX-5 2022', texto:'El historial del vehículo que me entregaron me dio total confianza. Todo estaba en orden y el precio fue muy competitivo.', estrellas:5 },
    { nombre:'Valentina Cruz', iniciales:'VC', vehiculo:'Compró Kia Sportage 2023', texto:'Hice la permuta de mi carro anterior y me dieron un muy buen precio. El proceso fue sencillo y sin contratiempos.', estrellas:4 },
    { nombre:'Sebastián López', iniciales:'SL', vehiculo:'Compró Royal Enfield Meteor', texto:'Desde la asesoría hasta la entrega todo fue perfecto. Los asesores conocen muy bien los productos.', estrellas:5 },
    { nombre:'Diana Morales', iniciales:'DM', vehiculo:'Compró Suzuki Gixxer 2021', texto:'El trámite fue rapidísimo y sin estrés. El equipo estuvo pendiente en todo momento. Muy agradecida.', estrellas:5 },
    { nombre:'Camilo Ríos', iniciales:'CR', vehiculo:'Compró Kia Sportage 2022', texto:'Compré online y fue una experiencia excelente. Las fotos eran reales y el vehículo llegó puntual.', estrellas:5 },
    { nombre:'Natalia Vargas', iniciales:'NV', vehiculo:'Compró AKT TT 200 2023', texto:'Precio justo, atención de primera y entrega a tiempo. No tengo ninguna queja, todo salió perfecto.', estrellas:5 },
  ];

  get col1(): Testimonio[] { return this.testimonios.filter((_,i) => i % 3 === 0); }
  get col2(): Testimonio[] { return this.testimonios.filter((_,i) => i % 3 === 1); }
  get col3(): Testimonio[] { return this.testimonios.filter((_,i) => i % 3 === 2); }

  getEstrellas(): number[] { return [1,2,3,4,5]};
}
