(function(){
	var app = angular.module('lightStore', []);
		app.controller('StoreController', ['$http',  function($http) {
			var store = this;
			//store.products = [];

			$http.get('js/products.json').success(function(data) {
				store.products = data;
			});

			//this.products = lightAndSound;
		}]);

	app.controller('TabController', function() {
    	this.tab = 1;
    	this.setTab = function(selectedTab) {
      		this.tab = selectedTab;
    	};
   	 	this.isSet = function(givenTab) {
     		return this.tab === givenTab;
    	};	
    
  	});

	//broken at the moment
	app.controller('GalleryController', function() {
    	this.current = 0;
    	this.setCurrent = function(assignCurrent) {
     		if (assignCurrent === null ) {
        		this.current = 0;
      		}
      		else {
       			this.current = assignCurrent;
      		}
    	};
  	});

  	app.controller('ShoppingBasketController', function() {
  		this.product = {};
  		this.basket = [];
  		this.cost = 0;
  		this.addToBasket = function(product, amount) {
  			var basketItem = [product, amount];
  				
  			this.cost += product.price * amount;
  			this.basket.push(basketItem);
  			
  		};

  		//need to implement this later and remove cost calculations in addToBasket
  		this.getTotalCost = function() {
  			
  			for (i = 0; i < basket.length(); i++) {
  				cost += basket[i][0].price * basket[i][1]; 
  				console.log(cost);

  			}
  			return cost;

  		};
  	});

	app.directive("lightsTab", function() {
    	return {
      		restrict: 'E',
      		templateUrl: 'lights.html'
    	};
    });
	
	app.directive("soundTab", function() {
    	return {
      		restrict: 'E',
      		templateUrl: 'sound.html'
    	};
    });

    app.directive("packageTab", function() {
    	return {
      		restrict: 'E',
      		templateUrl: 'package.html'
    	};
    });

    app.directive("aboutTab", function() {
    	return {
      		restrict: 'E',
      		templateUrl: 'about.html'
    	};
    });

    app.directive("contactTab", function() {
    	return {
      		restrict: 'E',
      		templateUrl: 'contact.html'
    	};
    });

    app.directive("shoppingCartTab", function() {
    	return {
      		restrict: 'E',
      		templateUrl: 'shopping-cart.html'
    	};
    });



    
})();

