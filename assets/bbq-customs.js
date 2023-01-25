document.querySelectorAll('.custom-variant-btn').forEach(link => {
  if(link.href === window.location.href){
    link.setAttribute('aria-current', 'activePage')
  }
});

var customOptions = document.getElementsByClassName('custom-variant-btn');
for (i = 0; i < customOptions.length; i++) {
  if (customOptions[i].innerText == "LP") {
    customOptions[i].title = "Liquid Propane";
  } else if (customOptions[i].innerText == "NG") {
    customOptions[i].title = "Natural Gas";
  }
}

//var productGridTitle = document.getElementsByClassName('grid-product__title');
//for (i = 0; i < productGridTitle.length; i++) {
//    productGridTitle[i].title = productGridTitle[i].innerText;
//}

//$(".site-header__search-input").change(function(event) {
//  event.stopPropagation();
//  if ($(".predictive-result__layout .product-grid").length) {
//    var productGridTitle = document.getElementsByClassName('grid-product__title');
//    for (i = 0; i < productGridTitle.length; i++) {
//        productGridTitle[i].title = productGridTitle[i].innerText;
//    }
//  }
//});

$(document).ready(function() {
    $('.variantSize .custom-variant-btn').mouseover(function(){
        $imgsrc = $(this).find('img').attr('src'); 
        $(".product-image-main img").attr('style', 'display: none');
        $(".product-image-main .image-wrap").prepend('<img class="hovered-selection" src="' + $imgsrc + '">');
        $(".hovered-selection").attr('style', 'opacity: unset');
    });

    $('.variantSize .custom-variant-btn').mouseleave(function(){
        $(".hovered-selection").remove();
        $(".product-image-main img").removeAttr("style");
    });
});

$('#low-monthly-payments').on('click', function(){
    var $iframe = $("#iframe").contents().find("#bread-button");
    $iframe.trigger("click");
    //$(".shopify-app-block").trigger('click');
    console.log("Low Monthly Payments Clicked!");
});


$(function() {
  try {
    $(window).resize(r).trigger('resize');
  }
  catch(err) {
    console.log(err.message);
  }
});


function r() {
    try {
      if($('.product-details-links .divider')) {
        $('.product-details-links .divider').removeClass('firstinrow lastinrow firstrow lastrow');
        var prevtop = -1;
        var firsttop = $('.product-details-links .divider:first').position().top;
        var lasttop = $('.product-details-links .divider:last').position().top;
        $.each($('.product-details-links .divider'), function(i, elem) {
          var currtop = $(elem).position().top;
          if (currtop != prevtop)
            $(elem).addClass('firstinrow');
          if (currtop == firsttop)
            $(elem).addClass('firstrow');
          if (currtop == lasttop)
            $(elem).addClass('lastrow');
          prevtop = currtop;
        });
        $('.product-details-links .divider.firstinrow').prevAll('.divider').first().addClass('lastinrow');
        //$('.product-details-links .divider:last').addClass('lastinrow');
      }
  }
  catch(err) {
    console.log(err.message);
  }
}