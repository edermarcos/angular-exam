export interface FormError {
  message: string;

  /*
  * Tipo de error basado en la validacion requerida
  * Ex. required | minlength | maxlength
  * */
  type: string;
}
