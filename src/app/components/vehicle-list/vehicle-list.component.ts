import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent {
  
  
  vehiculos = [
    {
      nombre: 'Toyota Corolla 2022',
      descripcion: 'Sedán full equipo, único dueño',
      precio: 85000000,
      anio: 2022,
      transmision: 'Automático',
      kilometraje: 32000,
      tipo: 'Sedán',
      imagen: 'https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg'
    },
    {
      nombre: 'Mazda 3 2021',
      descripcion: 'Excelente estado, poco uso',
      precio: 78000000,
      anio: 2021,
      transmision: 'Manual',
      kilometraje: 25000,
      tipo: 'Sedán',
      imagen: 'https://cdn.pixabay.com/photo/2016/11/29/09/32/auto-1868726_1280.jpg'
    },
    {
      nombre: 'Chevrolet Tracker 2023',
      descripcion: 'Camioneta moderna',
      precio: 95000000,
      anio: 2023,
      transmision: 'Automático',
      kilometraje: 10000,
      tipo: 'SUV',
      imagen: 'https://tuagenciadelrio.com/tracker-2023/'
    },
    {
      nombre: 'Chevrolet Tracker 2023',
      descripcion: 'Camioneta moderna',
      precio: 95000000,
      anio: 2023,
      transmision: 'Automático',
      kilometraje: 10000,
      tipo: 'SUV',
      imagen: 'https://tuagenciadelrio.com/tracker-2023/'
    }
  ];

}
