import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  // constructor() { }

  // ngOnInit(): void {
  // }

  heroeborrado: string  = ''
  heroes: string[] = ['Spirderman', ' Ironman',' Hulk','Thor']; 

  eliminarheroe(){
   this.heroeborrado = this.heroes.shift() || '';
    
    //this.h = heroeborrado
    
  }
 
}
