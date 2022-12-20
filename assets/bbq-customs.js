	jQuery(document).ready(function($){
		$('.clipped-text').each(function(){
			var unclipBtn = $(this).find('.unclip');
			unclipBtn.click(function(e){
				e.preventDefault();
				$(this).find('.clipped-text').css('max-height', 'none');
				$(this).hide();
			});
		});
	});

document.querySelectorAll('.custom-variant-btn').forEach(link => {
  if(link.href === window.location.href){
    link.setAttribute('aria-current', 'activePage')
  }
})

var customOptions = document.getElementsByClassName('custom-variant-btn');
for (i = 0; i < customOptions.length; i++) {
  if (customOptions[i].innerText == "LP") {
    customOptions[i].title = "Liquid Propane";
  } else if (customOptions[i].innerText == "NG") {
    customOptions[i].title = "Natural Gas";
  }
}