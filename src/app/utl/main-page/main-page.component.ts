import { Component, OnInit } from '@angular/core';

interface AlumnosUtl{
  nombre:string;
  edad:number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {


  regAlum:AlumnosUtl[]=[
    {
      nombre:'Mario',
      edad:15,
    },
    
    {
      nombre:'Lucia',
      edad:22,
    },

    {
      nombre:'Leonardo',
      edad:21,
    },

    {
      nombre:'Diana',
      edad:21,
    }

  ]

  resAlumno:AlumnosUtl={
    nombre:'',
    edad:0
  }
  agregar(){
    this.regAlum.push(this.resAlumno);
    this.resAlumno={
      nombre:'',
      edad:0
    }
  }
 
}
