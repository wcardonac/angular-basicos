//ahora creemos nuestro componente por que asi simplememte es un ts
//ahora ahora lo transfromamaos en un decorador

import { Component } from "@angular/core";




@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent {
nombre: string = 'Ironman'
edad  : number = 45

get nombrecapitalizado(){
    return this.nombre.toUpperCase()
}

obtenernombre(): string{
    // `` esto se comoce como un templete literañ
    //es  decir constuir un strig dentro, esto no es pripio de angular
    // esto es de js
    //return this.nombre + ' ' + this.edadesto seria lo mismo 
   return `${this.nombre}-${this.edad}`
   
}

// valos a cambiar el nombre y lka edad

cambiarNombre(){
    this.nombre = 'Spiderman';
}

cambiarEdad(){
    this.edad= 35
}

}