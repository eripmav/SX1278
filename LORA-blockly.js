+(function (window, webduino) {

  'use strict';

  window.getLORA = function (board, rstPin, ssPin) {
    return new webduino.module.LORA(board, rstPin, ssPin);
  };

}(window, window.webduino));
