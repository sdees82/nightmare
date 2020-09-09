'use strict';


function NavController(NavFactory, $location, $scope){
    var vm = this;

    this.menu = NavFactory.menuItems();
    this.imageSource = NavFactory.returnImage();
    this.imageClass = NavFactory.returnClass();
    $scope.isActive = function(viewLocation){
        return viewLocation === $location.path();
    };
}

function NavFactory(){
     var menu = [{
        name: "HOME",
        component: "home",
        class: "/home"
        }, {
         name: "ABOUT",
         component:"about",
         class: "/about"
         },{
          name: "SERVICES",
          component:"services",
          class: "/services"
         },{
          name: "GET INVOLVED",
         component:"getinvolved",
         class: "/getinvolved"
       }];     
            var Klass = "img-responsive myimg";
            var imageSource = "app/images/phd-large.png";
            var factory = {};
            factory.menuItems = function(){
                return menu;
            };
            factory.returnImage = function(){
                return imageSource;
            }
            factory.returnClass = function(){
                
                return Klass;
                
            }
            return factory;
            
}
    
angular.module('app')
        .component("navBar",{
            templateUrl: "app/components/navbar/navbar.html"
        })
        .controller('NavController', NavController)
        .factory('NavFactory', NavFactory);
