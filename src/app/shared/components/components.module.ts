import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppFormErrorsComponent } from './app-form-errors/app-form-errors.component';

@NgModule({
  declarations: [
    AppFormErrorsComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AppFormErrorsComponent,
  ],
})
export class ComponentsModule {
}
