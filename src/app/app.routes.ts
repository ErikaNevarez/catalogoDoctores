import { Routes } from '@angular/router';
import { ListarDoctoresComponent } from './componentes/listar-doctores/listar-doctores.component';
import { AgregarDoctoresComponent } from './componentes/agregar-doctores/agregar-doctores.component';
import { ConsultaComponent } from './componentes/consulta/consulta.component';
import { EliminarDoctoresComponent } from './componentes/eliminar-doctores/eliminar-doctores.component';
import { ActualizarComponent } from './componentes/actualizar/actualizar.component';
import { Component } from '@angular/core';
import { EditarComponent } from './componentes/editar/editar.component';


export const routes: Routes = [
    {path: 'listar', component: ListarDoctoresComponent},
    {path:'agregar', component: AgregarDoctoresComponent}, 
    {path: 'consulta/:id', component: ConsultaComponent}, 
    {path: 'eliminar', component: EliminarDoctoresComponent}, 
    {path: 'actualizar', component: ActualizarComponent}, 
    {path: 'editar/:id', component: EditarComponent}, 
    {path: '', redirectTo:'listar', pathMatch:'full'}, 
    {path: '**', redirectTo: 'listar'} //para rutas inválidas 
    
];
