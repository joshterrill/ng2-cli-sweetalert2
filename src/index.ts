

import { Injectable } from '@angular/core'
import { assign } from 'lodash';

let win : any = typeof window !== 'undefined' && window || {};

@Injectable()
export class SweetAlertService {
  constructor() {}

  swal(options) {
    return win.Sweetalert2(options);
  }

  prompt(options) {
    const baseOptions = {
      showCancelButton: true,
      confirmButtonText: 'Submit',
      input: 'text'
    };
    return win.Sweetalert2(assign(baseOptions, options));
  }

  confirm(options) {
    const baseOptions = {
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      type: 'warning'
    };
    return win.Sweetalert2(assign(baseOptions, options));
  }

  alert(options) {
    const baseOptions = {
      confirmButtonText: 'OK',
      type: 'info'
    };
    return win.Sweetalert2(assign(baseOptions, options));
  }

  question(options) {
    return this.alert(assign({ type: 'question' }, options));
  }

  success(options) {
    return this.alert(assign({ type: 'success' }, options));
  }

  error(options) {
    return this.alert(assign({ type: 'error' }, options));
  }

  warning(options) {
    return this.alert(assign({ type: 'warning' }, options));
  }

  info(options) {
    return this.alert(assign({ type: 'info' }, options));
  }
  
}
