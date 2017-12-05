	// create module
	var mockupApp = angular.module('mockupApp', ['ngRoute']);

	// configure our routes
    mockupApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/1.3.html',
				controller  : 'mainController'
			})

            // route for the contact page
            .when('/1.4', {
                templateUrl : 'pages/1.4.html',
                controller  : 'mainController'
            })

            .when('/2.2', {
                templateUrl : 'pages/2.2.html',
                controller  : 'mainController'
            })

            .when('/3.3', {
                templateUrl : 'pages/3.3.html',
                controller  : 'mainController'
            })

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'mainController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'mainController'
			});
	});

	// create the controller and inject Angular's $scope
    mockupApp.controller('mainController', function($scope) {
		// create a message to display in our view
		//$scope.message = '';
	});
