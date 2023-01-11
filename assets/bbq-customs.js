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

var opts = {
          buttonId: 'bread-checkout-btn-new',
          customTotal: 550000,
          /* STEP 3: Add a done callback */
          done: function(err, tx_token) {
            if (err) {
              console.error('there was an error: ', err);
              return;
            }

            console.log('The transaction ID is: ', tx_token);
            // add custom code to execute additional front-end logic when a user completes their checkout
          },
          /* END STEP 3 */
          /* STEP 4: Styling the Bread Button */
          customCSS: '#bread-button,body,html{height:100%;margin:0;width:100%}body{display:table}#bread-button{background:#50c742;color:#FFFFFF;border:0px solid #ffffff;border-radius:4px;display:table-cell;font-family:Lato, HelveticaNeue, Helvetica Neue, sans-serif;font-size:16px;font-weight:400;text-align:center;vertical-align:middle;transition:all .3s ease}.bread-btn{cursor:pointer}#bread-button.bread-btn:hover{background:#50c742}.bread-embed-inner,.bread-label .bread-embed-icon{display:inline-block}.bread-label .bread-embed-icon:after{background:rgba(255,255,255,.5);border-radius:50px;color:#333;content:"i";cursor:pointer;display:inline-block;line-height:1;margin-left:8px;padding:4px 9px}.bread-pot:before{content:"Pay over time"}.bread-btn .bread-as-low-as:before,.bread-label .bread-as-low-as:before{content:"As low as "}.bread-for:before{content:"For "}' 
          /* END STEP 4 */
        };

 bread.checkout(opts);

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


