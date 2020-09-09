'use strict';


function ContactController($scope,$location){
    var vm = this;

    $scope.formSubmit = function(isValid){
        if(isValid){
        $location.path('/formsubmit');

         alert("our form is amazing");

        }
        
    };
    
}



angular.module('app')
        .controller('ContactController', ContactController);