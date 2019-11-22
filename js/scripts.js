"use strict";

(function ($) {
  $.fn.myModal = function (action, obj) {
    // "this" - это элемент дерева DOM == $(this)
    var that = this;
    var defaultObj = {
      duration: 300
    };

    if (!obj) {
      obj = defaultObj;
    }

    var id = $(this).attr('id');
    var overlayHtml = "<div id=\"modal-overlay\" style=\"position: fixed; left: 0px; top: 0px; width: 100%; height: 150%; background-color: rgb(136, 136, 136); z-index: 9000; opacity: 0.6; display:none;\"></div>"; // let modalWnd = document.querySelector(`#${id}`); == $(this)[0] or this[0]

    var modalWnd = this[0]; //cose .css() not working

    var style = window.getComputedStyle(modalWnd);
    var width = parseInt(style.width);
    var height = parseInt(style.height);
    modalWnd.style = "position: fixed; z-index: 9001; left: 50%; top: 50%; margin-left: -".concat(width / 2, "px; margin-top: -").concat(height / 2, "px;");

    function open() {
      that.after(overlayHtml);
      $('#modal-overlay').fadeIn(obj.duration, function () {
        that.fadeIn(0);
      });
    }

    function close() {
      that.fadeOut(0, function () {
        $('#modal-overlay').fadeOut(obj.duration);
      });
    }

    $("body").on('click', '#modal-overlay', function () {
      close();
    });

    if (action == 'open') {
      open();
    }

    if (action == 'close') {
      close();
    }
  };
})(jQuery);

(function ($) {
  var $card = $('.cards .card');
  var $modalClose = $('.modal__close');
  var $modalOverlay = $('.modal-overlay');
  $card.on('click', function () {
    var cardHtml = $(this).html();
    $('.modal .card').html(cardHtml);
    $('#modal').myModal('open', {
      duration: 600
    });
  });
  $('.modal__close, .modal-ovelay').on('click', function () {
    $('#modal').myModal('close', {
      duration: 300
    });
  }); // setTimeout(function(){
  //   $('#modal').myModal('close',{duration:600});
  // },2500);
})(jQuery);
//# sourceMappingURL=maps/scripts.js.map
