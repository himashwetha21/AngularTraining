angular.module('route',["ngRoute"])
.config(route)
.controller('routeCtrl',routeCtrl)
function routeCtrl($scope)
{
 
}
 
function route($routeProvider){
    $routeProvider
    .when("/home", {
        templateUrl : "style/template/main.html"
    })
    .when("/red", {
        templateUrl : "style/template/red.html"
    })
    .when("/green", {
        templateUrl : "style/template/green.html"
    })
    .when("/blue", {
        templateUrl : "style/template/blue.html"
    })
    .otherwise({redirectTo:"/home"})
};
