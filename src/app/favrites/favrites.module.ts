import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavritesComponent } from  '../favrites/favrites.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  {
    path: '',
    component: FavritesComponent
  }
];
@NgModule({
  declarations: [
    FavritesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class FavritesModule { }
