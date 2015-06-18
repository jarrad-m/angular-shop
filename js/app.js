(function(){
	var app = angular.module('lightStore', []);
		app.controller('StoreController', function() {
			this.products = lightAndSound;
		});

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



    // needs to be moved to a JSON file at some stage
	var lightAndSound = [
	{ 
		name: 'Tri-phase', 
		price: 50.00,
		description: "		",
		canPurchase: true,
   		soldOut: false,
   		category: 'light', //options are light, sound or package
		images: [
			"images/image1.jpg",
			"images/image2.jpg",
			"images/image3.jpg",			
			"images/image4.jpg"
		]    		

   	},

	{ 
		name: 'Invader', 
		price: 65.00,
		description: "",
		canPurchase: true,
   		soldOut: false,
   		category: 'light',
   		images: [
			"images/image6.jpg"
		]
   	},

   	{ 
		name: 'Strobe', 
		price: 20.00,
		description: "",
		canPurchase: true,
   		soldOut: false,
   		category: 'light',
		images: [
			"images/image7.jpg"
		]

   	},

   	{ 
		name: 'Traffic Light', 
		price: 50.00,
		description: "",
		canPurchase: true,
   		soldOut: false,
   		category: 'light',
   		images: [
			"images/image8.jpg"
		]

   	},

   	{ 
		name: 'Deluxe Speaker & Lighting Set', 
		price: 230.00,
		description: "		",
		canPurchase: true,
   		soldOut: false,
   		category: 'package', 
		images: [
			"images/image9.jpg"			
		]    		
   	},

   	{ 
		name: 'Twin Speaker Set 1000RMS', 
		price: 170.00,
		description: "		",
		canPurchase: true,
   		soldOut: false,
   		category: 'sound', 
		images: [
			"images/image10.jpg"
		]    		

   	},

   	{ 
		name: 'Speaker Box', 
		price: 85,
		description: "		",
		canPurchase: true,
   		soldOut: false,
   		category: 'sound', 
		images: [
			"images/image11.jpg"			
		]    		

   	},








   	];




	
})();

