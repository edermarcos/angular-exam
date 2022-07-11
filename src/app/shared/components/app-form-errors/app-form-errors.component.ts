import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import _ from 'lodash';

import { FormError } from './form-error.interface';
// import { config } from 'src/app/core/config';

@Component({
  selector: 'app-form-errors',
  templateUrl: './app-form-errors.component.html',
  styleUrls: ['./app-form-errors.component.scss']
})
export class AppFormErrorsComponent implements OnInit, OnChanges {

  /*
   * Muestra mensajes de error provenientes de un formulario de angular
   * */

  /*
   * Muesta/Oculta el div dependiendo del usuario
   * Se recomienda usar form.get('').dirty || form.get('').touched
   * */
  @Input() isActive: boolean;

  /*
   * Arreglo de validaciones con mensajes personalizados basado en el tipo de error actual
   * */
  @Input() validations: FormError[];

  /*
   * Errores que tiene el input al que esta apuntando
   * Ex. form.get('').errors
   * */
  @Input() errors: any;

  /*
   * Ayuda a evitar repetir mensajes de errores comunes
   * */
  defaultValidations: FormError[];
  // config = config;
  _ = _;

  constructor() {
    this.defaultValidations = [
      { type: 'required', message: 'This field is required' },
      { type: 'hasNumber', message: 'This field must contain at least one number' },
      { type: 'hasCapitalCase', message: 'This field must contain at least an uppercase letter' },
      { type: 'hasSmallCase', message: 'This field must contain at least a lowercase letter' },
      { type: 'hasSpecialCharacters', message: 'This field must contain at least a special character' }
    ];
  }

  ngOnInit(): void {
    if (_.isEmpty(this.validations)) {
      this.validations = this.defaultValidations;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
}
