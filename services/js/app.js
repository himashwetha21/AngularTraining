angular.module('abc',[])
.controller('Ctrl',Ctrl)
.service('hexafy',hexafy)
function Ctrl($scope,hexafy)
{
 $scope.hex=hexafy.myFunc(250);
}
 
function hexafy(){
    this.myFunc=function(x){
        return x.toString(2);
    }
}