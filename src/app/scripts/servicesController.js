'use strict';



function servicesController(servicesFactory ){
    var vm = this;
    vm.services1 = servicesFactory.serviceItem1();
    vm.services2 = servicesFactory.serviceItem2();
    vm.services3 = servicesFactory.serviceItem3();
}

function servicesFactory(){
    var services = [{
                name: "Dream Catcher Program"
            },
            {
                name: "No parent left behind program"
            },
            {
                name: "Guidance on education decisions"
            },
            {
                name: "Business startup training/ coaching"
            },
            {
                name: "Home buyer program/ credit repair"
            }];

    var services2 = [{
                name: "Financial advising/Budget & savings"
            },
            {
                name: "Retirement planning"
            },
            {
                name: "Parent support groups"
            },
            {
                name: "Family support groups"
            },
            {
                name: "Children support groups"
            }];
     var services3 = [{
                name: "Teen support groups"
            },
            {
                name: "Computer training"
            },
            {
                name: "Parenting classes"
            },
            {
                name: "Couples support groups"
            },
            {
                name: "Co-parenting support & mediation"
            }];

    var factory = {};
    factory.serviceItem1 = function(){
        return services;
    };
    factory.serviceItem2 = function(){
        return services2;
    };
    factory.serviceItem3 = function(){
        return services3;
    };
    return factory;
}

angular.module('app')
        .controller('servicesController',servicesController)
        .factory('servicesFactory', servicesFactory);