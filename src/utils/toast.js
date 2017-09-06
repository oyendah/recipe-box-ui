import toastr from 'toastr';

function Toast(type, css, msg) {
  this.type = type;
  this.css = css;
  this.msg =  msg;
}

const css = {
  'top_full': 'toast-top-full-width',
  'bottom_full': 'toast-bottom-full-width',
  'top_left': 'toast-top-left',
  'top_right': 'toast-top-right',
  'bottom_right': 'toast-bottom-right',
  'bottom_left': 'toast-bottom-left',
}

toastr.options.extendedTimeOut = 0; //1000;
toastr.options.timeOut = 5000;
toastr.options.fadeOut = 5000;
toastr.options.fadeIn = 250;
toastr.options.closeButton = true;

export default class toast {
  static success(message) {
    new Toast('success', css.top_full, message);
    toastr.options.positionClass = css.top_full;
    toastr['success'](message);
  }

  static error(message) {
    toastr.options.positionClass = css.top_left;
    toastr['error'](message);
  }

  static warning(message) {
    toastr.options.positionClass = css.top_left;
    toastr['warning'](message);
  }

  static info(message) {
    toastr.options.positionClass = css.top_full;
    toastr['info'](message);
  }
}
