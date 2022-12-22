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

var content = document.getElementById("desc-content");
var button = document.getElementById("desc-show-more");

button.onclick = function () {

	if(content.className == "open"){
		//shrink the box
		content.className = "";
		button.innerHTML = "Read more >>";
	} else {
		//expand the box
		content.className = "open";
		button.innerHTML = "Read less <<";
	}

};