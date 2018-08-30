'use strict';

var app = angular.module('app', ['angularAccordion']);

app.controller('MainCtrl', function ($scope, $timeout, $interval, $compile) {
	$scope.isCountrySelected = false;
	$scope.jsonFilePath;
	$scope.updateGraph = function(){
		$scope.isCountrySelected = false;
		if($scope.selectedCountry == "uk"){
			$scope.jsonFilePath = './UK_data.json';
		}else{
			$scope.jsonFilePath = './US_data.json';
		}
	}
	
	$scope.applyGraph = function(){
		$scope.isCountrySelected = true;
	}
});
