import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InitComponent } from './init.component';

const routes: Routes = [
  {
    path: '',
    component: InitComponent,
  },
];

@NgModule({
  declarations: [
    InitComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
})
export class InitModule {
}
