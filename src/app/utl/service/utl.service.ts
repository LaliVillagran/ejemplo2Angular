import { Injectable } from '@angular/core';
import { AlumnosUtl } from '../interfaces/utl.interface';

@Injectable({
  providedIn: 'root'
})
export class UtlService {

private _alumnosUtl:AlumnosUtl[]=[
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
  constructor() { }

  get alumnosUtl():AlumnosUtl[]{
    return [...this._alumnosUtl];
  }

  agregarAlumno(alumno:AlumnosUtl){
    this._alumnosUtl.push(alumno);
  }

  mostrarSaludo(){
    console.log('saludo Service');
  }

}
