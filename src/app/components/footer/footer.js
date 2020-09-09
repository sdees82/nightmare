"use strict";





function FooterFactory(){
    var links = [{
        name: "About",
        component: "about"
    },{
        name: "Services",
        component: "services"
},{
        name: "Get Involved",
        component: "getinvolved"
}];
    var clinks = [{
        name: "248-871-PHD2 (248-871-7432) ",
    },{
        name: "parentshavedreams@gmail.com",
}];
    var factory = {};
    factory.links = function(){
        return links;
    }
    factory.contactLinks = function(){
        return clinks;
    }
    return factory;
}



angular.module("app")
    .controller("FooterController", function(FooterFactory){
          var vm = this;
          vm.links = FooterFactory.links();
          vm.contactLinks = FooterFactory.contactLinks();
    })
    .component("appFooter",{
                    templateUrl: "app/components/footer/footer.html"

    })
    .factory('FooterFactory',FooterFactory);