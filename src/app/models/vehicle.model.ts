export interface Vehicle {
  id: number;
  brand: string;
  model: string;
  year: number;
  engine: string;
  transmission: string;
  price: number;
  type: 'carro' | 'moto' | 'camioneta';
  condition: 'nuevo' | 'usado';
  tag?: 'oferta';
  image?: string;
}