document.querySelectorAll('.custom-variant-btn').forEach(link => {
  if(link.href === window.location.href){
    link.setAttribute('aria-current', 'activePage')
  }
})
var specsContent = document.getElementById("specs-content");
var specsButton = document.getElementById("specs-view-more");
    specsButton.onclick = function () {
    	if(specsContent.className == "view"){
    		specsContent.className = "see";
    		specsButton.innerHTML = "Read more >>";
    	} else {
    		specsContent.className = "view";
    		specsButton.innerHTML = "Read less <<";
    	}
    };

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

const addCartProdPage = function(obj){
     let variantID = document.querySelector('select[name="id"]').value;
      obj.dataset.id = variantID;
   
}



if(button !== null  && button.onclick !== null && typeof button.onclick !== "undefined"){
  button.onclick = function () {
  try{
    	if(content.className == "open"){
		//shrink the box
		content.className = "";
		button.innerHTML = "Read more >>";
	} else {
		//expand the box
		content.className = "open";
		button.innerHTML = "Read less <<";
	}
  }catch(e){
    throw(e)
  }
}
}

var gasModal = document.getElementById("gastype_modal");
var gasInfoBtn = document.getElementById("learn-gastype");
var spanClose = document.getElementsByClassName("gasinfo-close")[0];

gasInfoBtn.onclick = function() {
  gasModal.style.display = "block";
}
spanClose.onclick = function() {
  gasModal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == gasModal) {
    gasModal.style.display = "none";
  }
}