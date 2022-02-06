
// vamos a ocupar el decorador para transformar la clase en un componente de angular
//extraemos de este paquete '@angular/core' el Component
import { Component} from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{title}}</h1>
        <h3>la base es: <strong>{{base}}</strong></h3>
        
        
        
        <button (click)="acumular(base)" >+ {{base}}</button>

        <span>{{numero}}</span>
        
        <button (click)="acumular(-base)">-{{base}}</button>

    `
})

// primero creamos una clase 
// la palabra export es para utilizar en otros lugares fuera de este archivo
// para que todo funcine tambien debemos de llamar este component en .module
 export class ContadorComponent {
    title: string = 'Contador App';
    numero: number = 10;
    base: number = 5
  
  sumar(){
    this.numero += 1
  }
  restar(){
    this.numero -= 1
  }
  
  acumular(valor:number){
    this.numero +=valor
  }
}
