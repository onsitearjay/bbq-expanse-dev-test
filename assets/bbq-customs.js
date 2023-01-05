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


theme.AddCart = (function() {
    var selectors = {
      quickAddBtn: '.js-add-cart-btn',
      quickAddForm: '.js-add-cart-form',
      quickAddHolder: '#AddCartHolder'
    };
  
    var modalInitailized = false;
    var modal;
    var AddCart = (function(container) {
       console.log(container);
      if (!container) {
        return;
      }
     
      this.container = container;
      this.init();
    })();
  
    AddCart.prototype = Object.assign({}, AddCart.prototype, {
      init: function() {
        // When a single variant, auto add it to cart
        var quickAddBtns = this.container.querySelectorAll(selectors.quickAddBtn);
         console.log(quickAddBtns)
         console.log('test')
        if (quickAddBtns) {
          quickAddBtns.forEach(btn => {
           
            btn.addEventListener('click', this.addToCart.bind(this));
          });
        }
  
        // Button loads form when 1+ variants
        var quickAddForms = this.container.querySelectorAll(selectors.quickAddForm);
  
        // if (quickAddForms.length) {
        //   this.quickAddHolder = document.querySelector(
        //     selectors.quickAddHolder);
        //   if (!modalInitailized) {
        //     modal = new theme.Modals('QuickAddModal', 'quick-add');
        //     modalInitailized = true;
  
        //     // Empty cart form when closed
        //     document.addEventListener('modalClose.QuickAddModal', function() {
        //       setTimeout(function() {
        //         this.quickAddHolder.innerHTML = '';
        //       }.bind(this), 350);
        //     }.bind(this));
        //   }
  
        //   quickAddForms.forEach(btn => {
        //     btn.addEventListener('click', this.loadQuickAddForm.bind(this));
        //   });
        // }
      },
  
      addToCart: function(evt) {
        console.log('test')
        var btn = evt.currentTarget;
        var visibleBtn = btn.querySelector('.btn');
        visibleBtn.classList.add('btn--loading');
        var id = btn.dataset.id;
  
        var data = {
         'items': [{
          'id': id,
          'quantity': 1
          }]
        };
  
        fetch(theme.routes.cartAdd, {
          method: 'POST',
          body: JSON.stringify(data),
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(function(data) {
          if (data.status === 422 || data.status === 'bad_request') {
          } else {
            var product = data;
            document.dispatchEvent(new CustomEvent('ajaxProduct:added', {
              detail: {
                product: product,
                addToCartBtn: btn
              }
            }));
          }
  
          visibleBtn.classList.remove('btn--loading');
        }.bind(this));
      },
    });
  
    return AddCart;
  })();

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


