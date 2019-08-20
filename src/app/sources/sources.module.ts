import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SourcesComponent } from '../sources/sources.component';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  {
    path: '',
    component: SourcesComponent
  }
];

@NgModule({
  declarations: [
    SourcesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class SourcesModule { }
