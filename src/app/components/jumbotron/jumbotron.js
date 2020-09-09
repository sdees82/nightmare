(function(){
'use strict';


function jumbotronController(){
    var vm = this;

}


angular.module("app")
        .controller('jumbotronController', jumbotronController)
        .component('appJumbo',{
            templateUrl: 'components/jumbotron/jumbotron.html',
            bindings: {
                zid: "=",
                klass: "@"
        }
        });
})();