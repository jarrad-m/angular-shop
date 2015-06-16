(function(){
	var app = angular.module('lightStore', []);
		app.controller('StoreController', function() {
			this.products = lightAndSound;
		});

	app.controller('TabController',function() {
    	this.tab = 2;
    	this.setTab = function(selectedTab) {
      		this.tab = selectedTab;
    	};
   	 	this.isSet = function(givenTab) {
     		return this.tab === givenTab;
    };	
    
  });

	

	var lightAndSound = [
	{ 
		name: 'Tri-phase', 
		price: 50.00,
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
		canPurchase: true,
   		soldOut: false,
   		category: 'light' 
   	},

   	{ 
		name: 'Strobe', 
		price: 20.00,
		canPurchase: true,
   		soldOut: false,
   		category: 'light' 
   	},

   	{ 
		name: 'Traffic Light', 
		price: 50.00,
		canPurchase: true,
   		soldOut: false,
   		category: 'sound' 
   	}
   	];




	
})();

