$.noConflict();
jQuery(document).ready(function($) {

    


    jQuery('.ma1').css({
        "width": wSize1,
        "height": hSize1
    });

    jQuery('.ma2').css({
        "width": wSize2,
        "height": hSize2
    });

    jQuery('.ma3').css({
        "width": wSize3,
        "height": hSize3
    });

    jQuery('.ma4').css({
        "width": wSize4,
        "height": hSize4
    });



});

var app=angular.module('myApp',['ui.router','ngMap']);

app.config(['$urlRouterProvider','$stateProvider', function($urlRouterProvider,$stateProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('start',{
				url: '/',
				template: '',
			})

		$stateProvider
			.state('team',{
				url: '/team',
				templateUrl: 'templates/team.html',
				controller: 'TeamCtrl',
			})

		$stateProvider
			.state('preise',{
				url: '/preise',
				templateUrl: 'templates/preise.html',
			})

		$stateProvider
			.state('bilder',{
				url: '/bilder',
				templateUrl: 'templates/bilder.html',
			})

		$stateProvider
			.state('kontakt',{
				url: '/kontakt',
				templateUrl: 'templates/kontakt.html',
				controller: 'kontaktCtrl',
			})

		$stateProvider
			.state('impressum',{
				url: '/impressum',
				templateUrl: 'templates/impressum.html',
			})

		

	}]);

app.controller('navCtrl',['$scope', '$state',  function($scope,$state){
	$scope.isSelected=[true,false,false,false,false];
	var currentItem=0;
	$scope.assignClass=function(number){
		$scope.isSelected[currentItem]=false;
		$scope.isSelected[number]=true;
		currentItem=number;
		switch(number){
			case 0:
				$state.go('start');
				break;
			case 1:
				$state.go('team');
				break;
			case 2:
				$state.go('preise');
				break;
			case 3:
				$state.go('bilder');
				break;
			case 4:
				$state.go('kontakt');
				break;
			default:
				$state.go('start');
				break;
		}

	};
}]);

app.controller('kontaktCtrl',['$scope', '$window', function($scope, $window){

	
	$scope.isError='';

	$scope.showWay= function(){
		$scope.isStreet=false;
		$scope.isCity=false;
		if($scope.strasse==null){
			
			$scope.isStreet=true;
			$scope.isError="myError";		

		}else if($scope.plz==null&&$scope.stadt!=null){
			var street = $scope.strasse;
			var city = $scope.stadt;
			var mapUrl="https://www.google.de/maps/dir/"+street+",+"+city+"/Lucias+Hair+Fashion,+Mannheim/@49.515099,8.3674828,11z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x4797ce43cf09ed15:0x1be589e62389bdfb!2m2!1d8.515128!2d49.51497?hl=de";	
			$window.open(mapUrl);


		}else if($scope.plz!=null&&$scope.stadt==null){
			var street = $scope.strasse;
			var zip = $scope.plz;
			
			var mapUrl="https://www.google.de/maps/dir/"+street+",+"+zip+"/Lucias+Hair+Fashion,+Mannheim/@49.515099,8.3674828,11z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x4797ce43cf09ed15:0x1be589e62389bdfb!2m2!1d8.515128!2d49.51497?hl=de";	
			$window.open(mapUrl);
		}else if($scope.stadt==null){
			$scope.isCity=true;
			$scope.isError="myError";	

		}else{

			var street = $scope.strasse;
			var zip = $scope.plz;
			var city = $scope.stadt;
			var mapUrl="https://www.google.de/maps/dir/"+street+",+"+zip+"+"+city+"/Lucias+Hair+Fashion,+Mannheim/@49.515099,8.3674828,11z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x4797ce43cf09ed15:0x1be589e62389bdfb!2m2!1d8.515128!2d49.51497?hl=de";	
			$window.open(mapUrl);
		}
		
	};
}]);

app.controller('TeamCtrl',['$scope',function($scope){
	var w = window.innerWidth;
    var h = window.innerHeight;

    var wSize1 = Math.floor(w * 0.128);
    var hSize1 = Math.floor(wSize1 * 1.75);

    var wSize2 = Math.floor(w * 0.156);
    var hSize2 = Math.floor(wSize2 * 1.6);

    var wSize3 = Math.floor(w * 0.11);
    var hSize3 = Math.floor(wSize3 * 2.4);

    var wSize4 = Math.floor(w * 0.238);
    var hSize4 = Math.floor(wSize4 * 1.1); 

    $scope.cssMa1={
    	"width": wSize1,
        "height": hSize1
    };

    $scope.cssMa2={
    	"width": wSize2,
        "height": hSize2
    };

    $scope.cssMa3={
    	"width": wSize3,
        "height": hSize3
    };

    $scope.cssMa4={
    	"width": wSize4,
        "height": hSize4
    };


	 $scope.animation = {
        'home': '',
        'team': '',
        'preise': '',
        'kontakt': ''
    };

      var effect = "animated zoomIn rotateIn";

    $scope.onHoverEffect = function(nav) {
        document.querySelector(selector[nav]).classList.toggle("flip");
        $scope.animation[nav] = effect;
       

    };

    $scope.offHoverEffect = function(nav) {
        document.querySelector(selector[nav]).classList.toggle("flip");
        $scope.animation[nav] = '';
        

    };

}]);